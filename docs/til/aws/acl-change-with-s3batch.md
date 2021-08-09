---
title: S3 Batch Operation을 이용하여 PUT 객체 ACL 일괄 설정하기
description: S3 Batch Operation을 이용하여 PUT 객체 ACL 일괄 설정하기
tags: ['AWS', 'S3', 'S3Batch']
---

# S3 Batch Operation을 이용하여 PUT 객체 ACL 일괄 설정하기

# 0. 시나리오

- 전체 파일의 ACL을 Private 으로 변경하고 싶다.
  - PUT 객체 ACL 처리 진행

# 1. S3 Batch Operation을 위한 준비

## 매니페스트 생성

1. ACL 일괄 변경을 원하는 S3 bucket으로 이동

   ![~@img/acl-change-with-s3batch/acl-change-with-s3batch_11.27.23.png](~@img/acl-change-with-s3batch/acl-change-with-s3batch_11.27.23.png)

2. **관리**탭 의 **인벤토리**로 이동

   ![~@img/acl-change-with-s3batch/acl-change-with-s3batch_11.29.29.png](~@img/acl-change-with-s3batch/acl-change-with-s3batch_11.29.29.png)

   ![~@img/acl-change-with-s3batch/acl-change-with-s3batch_11.29.36.png](~@img/acl-change-with-s3batch/acl-change-with-s3batch_11.29.36.png)

3. 매니페스트 생성을 위한 옵션 설정
   - 원하는 출력 형식, 객체 버전, 필드 선택, 암호화 등을 설정
4. 저장을 누르면 약 1~2일에 걸쳐 생성 (**버킷 크기, 객체 갯수에 따라 다르며 최대 48시간 소요**)

   - 위 `대상 버킷` 으로 지정한 버킷에 생성됨 (아래와 같은 경로를 따름)

   ```
   destination-prefix/source-bucket/config-ID/YYYY-MM-DDTHH-MMZ/manifest.json
   destination-prefix/source-bucket/config-ID/YYYY-MM-DDTHH-MMZ/manifest.checksum
   destination-prefix/source-bucket/config-ID/hive/dt=YYYY-MM-DD-HH-MM/symlink.txt
   ```

## 매니페스트 내용

```json
{
  "sourceBucket": "example-source-bucket",
  "destinationBucket": "arn:aws:s3:::example-inventory-destination-bucket",
  "version": "2016-11-30",
  "creationTimestamp": "1514944800000",
  "fileFormat": "CSV",
  "fileSchema": "Bucket, Key, VersionId, IsLatest, IsDeleteMarker, Size, LastModifiedDate, ETag, StorageClass, IsMultipartUploaded, ReplicationStatus, EncryptionStatus, ObjectLockRetainUntilDate, ObjectLockMode, ObjectLockLegalHoldStatus",
  "files": [
    {
      "key": "Inventory/example-source-bucket/2016-11-06T21-32Z/files/939c6d46-85a9-4ba8-87bd-9db705a579ce.csv.gz",
      "size": 2147483647,
      "MD5checksum": "f11166069f1990abeb9c97ace9cdfabc"
    }
  ]
}
```

- 상세
  - 원본 버킷 이름
  - 대상 버킷 이름
  - 인벤토리의 버전
  - 인벤토리 보고서 생성이 버킷 스캔을 시작한 시작 시간 및 날짜로 구성된 epoch 날짜 형식의 생성 타임스탬프
  - 인벤토리 파일의 형식 및 스키마
  - 대상 버킷에 있는 인벤토리 파일의 실제 목록

[Amazon S3 인벤토리](https://docs.aws.amazon.com/ko_kr/AmazonS3/latest/dev/storage-inventory.html)

# 2. 배치 작업 생성

![~@img/acl-change-with-s3batch/acl-change-with-s3batch_11.30.39.png](~@img/acl-change-with-s3batch/acl-change-with-s3batch_11.30.39.png)

1. S3 > 배치작업 (Batch Operation) 으로 이동
2. **작업 생성**

## 지역 및 매니페스트 선택

![~@img/acl-change-with-s3batch/acl-change-with-s3batch_5.30.43.png](~@img/acl-change-with-s3batch/acl-change-with-s3batch_5.30.43.png)

매니페스트의 객체가 버전 지정된 버킷에 있는 경우 객체의 버전 ID를 지정해야 합니다. 작업을 생성하면 S3 배치 작업가 작업을 실행하기 전에 전체 매니페스트를 구문 분석합니다. 하지만 버킷 상태 "스냅샷"을 생성하지는 않습니다.

매니페스트에는 수십억 개의 객체가 포함될 수 있으므로 작업을 실행하는 데 오래 걸릴 수 있습니다. 해당 객체에 대한 버전 ID를 지정하지 않은 상태에서 작업이 실행되는 동안 새 버전으로 객체를 덮어쓰면 Amazon S3는 작업 생성 시 존재했던 버전이 아니라 객체의 최신 버전에서 작업(operation)을 수행합니다. 이 문제를 피하는 유일한 방법은 매니페스트에 나열된 객체에 버전 ID를 지정하는 것입니다.

![~@img/acl-change-with-s3batch/acl-change-with-s3batch_5.26.33.png](~@img/acl-change-with-s3batch/acl-change-with-s3batch_5.26.33.png)

3. 1에서 생성한 매니페스트를 선택

- 직접 작성한 CSV 파일을 지정할 수 있으나 본 가이드에서는 편의상 위에서 생성한 매니페스트를 이용한 방법만 다룬다.

4. **다음**

## 작업 선택

![~@img/acl-change-with-s3batch/acl-change-with-s3batch_6.07.17.png](~@img/acl-change-with-s3batch/acl-change-with-s3batch_6.07.17.png)

5. 작업 선택 > ACL(액세스 제어 목록) 바꾸기 선택

![~@img/acl-change-with-s3batch/acl-change-with-s3batch_6.09.11.png](~@img/acl-change-with-s3batch/acl-change-with-s3batch_6.09.11.png)

6. 원하는 권한으로 설정

7. **다음**

## 추가 옵션 구성

![~@img/acl-change-with-s3batch/acl-change-with-s3batch_6.17.49.png](~@img/acl-change-with-s3batch/acl-change-with-s3batch_6.17.49.png)

8. 배치 작업에 대한 설명과 우선 순위 설정

![~@img/acl-change-with-s3batch/acl-change-with-s3batch_6.17.55.png](~@img/acl-change-with-s3batch/acl-change-with-s3batch_6.17.55.png)

9. 완료 보고서 작성 여부와 보고서 저장 위치 지정

![~@img/acl-change-with-s3batch/acl-change-with-s3batch_6.19.26.png](~@img/acl-change-with-s3batch/acl-change-with-s3batch_6.19.26.png)

10. 배치 작업의 권한 설정

배치 작업에 필요한 IAM Role을 생성하여 지정해야 한다.
이 때, 배치 작업 내용에 따라 권한이 달라지므로 어떤 작업을 수행할 지 고려하여 Role을 지정한다.
(예를 들어, `PUT Object Copy` 작업을 실행하려면 원본 버킷에 대한 `s3:GetObject` 권한과 대상 버킷에 대한 `s3:PutObject` 권한이 필요)
또한, 매니페스트를 읽고 작업 완료 보고서를 작성할 수 있는 권한도 필요하다.

- IAM 역할 정책과 신뢰 정책을 어떻게 설정해야 할 지 모르겠다면, 위의 빨간 박스로 체크해둔 **IAM 역할 정책 템플릿 및 IAM 신뢰 정책보기** 를 클릭하여 정책 템플릿을 복사할 수 있다.

  ![~@img/acl-change-with-s3batch/acl-change-with-s3batch_6.26.26.png](~@img/acl-change-with-s3batch/acl-change-with-s3batch_6.26.26.png)

  - IAM 생성하기

    ## IAM Policy 생성하기

    1. IAM → 액세스 관리 → 정책 → **정책 생성**
    2. JSON 탭으로 이동

    ![~@img/acl-change-with-s3batch/acl-change-with-s3batch_6.31.13.png](~@img/acl-change-with-s3batch/acl-change-with-s3batch_6.31.13.png)

    - 위의 템플릿을 참조하여 JSON 작성

    ![~@img/acl-change-with-s3batch/acl-change-with-s3batch_6.32.23.png](~@img/acl-change-with-s3batch/acl-change-with-s3batch_6.32.23.png)

    - 저장

    ## IAM Role 생성하기

    1. IAM → 액세스 관리 → 역할 → 역할 만들기

    ![~@img/acl-change-with-s3batch/acl-change-with-s3batch_6.33.09.png](~@img/acl-change-with-s3batch/acl-change-with-s3batch_6.33.09.png)

    2. S3 → S3 Batch Operation 선택

    ![~@img/acl-change-with-s3batch/acl-change-with-s3batch_6.34.24.png](~@img/acl-change-with-s3batch/acl-change-with-s3batch_6.34.24.png)

    3. 위에서 저장한 정책을 연결

  ![~@img/acl-change-with-s3batch/acl-change-with-s3batch_6.39.25.png](~@img/acl-change-with-s3batch/acl-change-with-s3batch_6.39.25.png)

  위에서 생성한 IAM Role 지정

11. 검토 후 생성

# 3. 배치 작업 실행

![~@img/acl-change-with-s3batch/acl-change-with-s3batch_7.17.24.png](~@img/acl-change-with-s3batch/acl-change-with-s3batch_7.17.24.png)

1. 위에서 생성한 배치 작업을 선택하고 **작업 실행**

![~@img/acl-change-with-s3batch/acl-change-with-s3batch_7.20.15.png](~@img/acl-change-with-s3batch/acl-change-with-s3batch_7.20.15.png)

2. 작업 완료

끝
