---
title: CloudTrail Log를 타 계정의 S3(+MFA Delete)에 전송하기
description: CloudTrail Log를 타 계정의 S3(+MFA Delete)에 전송하기
tags: ['AWS', 'CloudTrail', 'S3']
---

# CloudTrail Log를 타 계정의 S3(+MFA Delete)에 전송하기

# 0. 시나리오

(1) A 계정에서 발생하는 CloudTrail Log를 B 계정에 존재하는 S3 Bucket에 담고 싶다.
(2) 이때 쌓이는 Log 객체들의 버전을 기록한다.
(3) B계정의 S3 bucket에 담긴 Log 객체에 접근하기 위해서는 MFA가 필요하다.

# 1. B계정 S3 Bucket 설정하기

## (1) S3 Bucket 생성하기

![~@img/cloudtrail-log-to-another-account/_2020-03-04__10.18.07.png](~@img/cloudtrail-log-to-another-account/_2020-03-04__10.18.07.png)

- 로그를 쌓을 버킷을 생성한다.

![~@img/cloudtrail-log-to-another-account/_2020-03-04__10.18.30.png](~@img/cloudtrail-log-to-another-account/_2020-03-04__10.18.30.png)

- `버전 관리` 부분을 체크한다.
- 기타 다른 옵션에 대해 필요한 경우 체크한다.

![~@img/cloudtrail-log-to-another-account/_2020-03-04__10.18.53.png](~@img/cloudtrail-log-to-another-account/_2020-03-04__10.18.53.png)

- 권한 설정은 이 이후에 세부적으로 진행할 것이기 때문에 일단은 `다음`을 눌러 버킷 생성을 진행한다.

## (2) Bucket에 권한 설정 하기

![~@img/cloudtrail-log-to-another-account/_2020-03-04__10.42.44.png](~@img/cloudtrail-log-to-another-account/_2020-03-04__10.42.44.png)

- 1에서 생성한 Bucket의 `권한` → `버킷 정책` 에서 CloudTrail에 쓰기 권한을 줄 수 있는 정책을 작성한다.
  - 아래 양식 참고

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AWSCloudTrailAclCheck20131101",
      "Effect": "Allow",
      "Principal": {
        "Service": "cloudtrail.amazonaws.com"
      },
      "Action": "s3:GetBucketAcl",
      "Resource": "arn:aws:s3:::myBucketName"
    },
    {
      "Sid": "AWSCloudTrailWrite20131101",
      "Effect": "Allow",
      "Principal": {
        "Service": "cloudtrail.amazonaws.com"
      },
      "Action": "s3:PutObject",
      "Resource": [
        "arn:aws:s3:::myBucketName/[optional] myLogFilePrefix/AWSLogs/111111111111/*"
      ],
      "Condition": {
        "StringEquals": {
          "s3:x-amz-acl": "bucket-owner-full-control"
        }
      }
    }
  ]
}
```

- `myBucketName` 과 `myLogFilePrefix` (Optional), `111111111111` (**A Account Number**) 수정 필요

# 2. A계정 CloudTrail 설정하기

## (1) CloudTrail 추적 생성하기

![~@img/cloudtrail-log-to-another-account/_2020-03-04__11.04.31.png](~@img/cloudtrail-log-to-another-account/_2020-03-04__11.04.31.png)

![~@img/cloudtrail-log-to-another-account/_2020-03-04__11.04.43.png](~@img/cloudtrail-log-to-another-account/_2020-03-04__11.04.43.png)

- 1번 과정에서 생성한 Bucket을 지정. 위에서 접두사(Optional)를 지정했다면 이 또한 명시하여 설정한다.

![~@img/cloudtrail-log-to-another-account/_2020-03-04__11.07.51.png](~@img/cloudtrail-log-to-another-account/_2020-03-04__11.07.51.png)

- 생성 완료. 몇 분 후 구성이 완료 되면 B계정 Bucket에 A계정의 CloudTrail Log가 쌓이게 된다.

  ![~@img/cloudtrail-log-to-another-account/_2020-03-04__11.19.25.png](~@img/cloudtrail-log-to-another-account/_2020-03-04__11.19.25.png)

# 3. MFA 설정

- S3 Bucket에 다음과 같은 `권한` → `버킷 정책`을 추가 한다.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "MFA",
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::<Account>:root"
      },
      "Action": "s3:*",
      "Resource": "arn:aws:s3:::<Bucket-Name>/*",
      "Condition": {
        "BoolIfExists": {
          "aws:MultiFactorAuthPresent": "true"
        }
      }
    }
  ]
}
```

- `"arn:aws:iam::<Account>:root"` 에 Account 숫자를 정확히 기입
- `Action` 의 경우 더 세밀한 Action으로 지정 가능
- `"arn:aws:s3:::<Bucket-Name>/*"` 에 Bucket Name을 정확히 기입

버킷 소유자, 버킷을 생성한 AWS 계정(루트 계정), 모든 인증된 IAM 사용자는 버전 관리를 활성화할 수 있지만, 버킷 소유자(루트 계정)만 MFA Delete를 활성화할 수 있습니다. 자세한 내용은 MFA 삭제 및 버전 관리에 대한 AWS 블로그 게시물을 참조하십시오.

- 버저닝과 달리 **MFA Delete 기능은 Root 사용자만 활성화** 시킬 수 있다.

[https://aws.amazon.com/ko/premiumsupport/knowledge-center/enforce-mfa-other-account-access-bucket/](https://aws.amazon.com/ko/premiumsupport/knowledge-center/enforce-mfa-other-account-access-bucket/)

[https://aws.amazon.com/ko/blogs/security/how-to-enable-mfa-protection-on-your-aws-api-calls/](https://aws.amazon.com/ko/blogs/security/how-to-enable-mfa-protection-on-your-aws-api-calls/)

- 위 링크 참고

[](https://docs.aws.amazon.com/ko_kr/AmazonS3/latest/dev/Versioning.html#MultiFactorAuthenticationDelete)

[](https://docs.aws.amazon.com/ko_kr/AmazonS3/latest/dev/example-bucket-policies.html#example-bucket-policies-use-case-7)

[Securing Access to AWS Using MFA - Part 3 | Amazon Web Services](https://aws.amazon.com/ko/blogs/security/securing-access-to-aws-using-mfa-part-3/)

[다른 계정의 사용자가 내 S3 버킷에 액세스할 때 MFA 적용](https://aws.amazon.com/ko/premiumsupport/knowledge-center/enforce-mfa-other-account-access-bucket/)
