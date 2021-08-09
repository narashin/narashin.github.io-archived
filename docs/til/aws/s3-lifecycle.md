---
title: S3에 저장한 데이터를 일정 시간 후에 삭제하고 싶다
description: S3의 수명주기(Lifecycle) 설정하기
tags: ['AWS', 'S3']
---

# S3에 저장한 데이터를 일정 시간 후에 삭제하고 싶다 : S3의 수명주기(Lifecycle) 설정하기

![~@img/s3-lifecycle/s3-lifecycle_5.31.26.png](~@img/s3-lifecycle/s3-lifecycle_5.31.26.png)

- 수명주기를 설정하고 싶은 S3 Bucket에 접근하여 `관리` 탭을 클릭

![~@img/s3-lifecycle/s3-lifecycle_5.31.26%201.png](~@img/s3-lifecycle/s3-lifecycle_5.31.261.png)

- `수명 주기 규칙 추가` 를 클릭

## (1) 수명 주기 규칙 : 이름 및 범위

![~@img/s3-lifecycle/s3-lifecycle_5.36.13.png](~@img/s3-lifecycle/s3-lifecycle_5.36.13.png)

- `규칙 이름` 을 명명
- `접두사/태그에 대한 범위` 에 대한 필터가 필요한 경우 지정할 수 있습니다.

  - 접두사(Prefix)는 Bucket내에서 사용되는 폴더와 동일

    ![~@img/s3-lifecycle/s3-lifecycle_5.40.18.png](~@img/s3-lifecycle/s3-lifecycle_5.40.18.png)

  - 위와 같이 설정했다면, 규칙 이름이 `something_gone_after_1day` 가 되고, 접두사(폴더명)가 `something` 인 객체들에만 적용.

## (2) 수명 주기 규칙 : 이전

![~@img/s3-lifecycle/s3-lifecycle_5.45.29.png](~@img/s3-lifecycle/s3-lifecycle_5.45.29.png)

스토리지를 기본 S3에서 Standard-IA, Intelligent-Tiering, One Zone-IA, Glacier, Glacier Deep Archive 등으로 이전하고 싶을 때 사용합니다.

본 요구사항에서는 필요 없는 설정이므로 아무것도 설정하지 않은 상태로 다음으로 넘어갑니다.

## (3) 수명 주기 규칙 : 만료

![~@img/s3-lifecycle/s3-lifecycle_5.49.10.png](~@img/s3-lifecycle/s3-lifecycle_5.49.10.png)

객체 생성 후 원하는 시간이 지나면 삭제할 수 있습니다.

객체의 버전에 따라 만료 날짜를 다르게 설정할 수 있으며 최소 단위는 1일 입니다.

## (4) 수명 주기 규칙 : 검토

![~@img/s3-lifecycle/s3-lifecycle_5.54.16.png](~@img/s3-lifecycle/s3-lifecycle_5.54.16.png)

설정 내용을 마지막으로 검토하고 `저장` 하면 규칙이 적용됩니다.

- 주의
  - 본 설정은 해당 Bucket의 Prefix/Tag 설정에 따라 객체의 범위가 달라질 수 있습니다만, 해당 범위 안에서는 **언제 생성 된 파일이든 모두 같은 룰**이 적용됩니다. 따라서 위에서 적용 시킨 것처럼 1일 후 삭제 되게 설정을 해두었다면, 이미 생성된 지(업로드한 지) 1일이 지난 객체들은 삭제가 진행됩니다.
