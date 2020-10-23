---
title: Panopticon
description: CloudTrail을 이용한 Security Group 수정 알림 Slack으로 수신하기
---

# {{ $frontmatter.title }}
::: tip 목표
{{ $frontmatter.description }}
:::

[[toc]]
   
## 0. 시나리오

AWS 보안그룹이 수정, 생성, 삭제 됐을 때 알림을 받고 싶다.

1. CloudTrail 을 이용하여 Write 된 내역을 추적한다.
2. CloudWatch Event 를 통해 1 중, 특정 이벤트(EC2 Security Group 편집)가 발생했을 때 Lambda를 호출하게 한다.
3. Lambda에 Slack 메시지를 보낼 수 있게 코드를 작성한다.
4. 이 모든 과정에 필요한 IAM Role, CloudWatch Event, Lambda 등을 따로 작성하지 않고 Serverless Framwork 를 이용하여 Wrapping 된 파일을 이용한다.

## 1. CloudTrail 설정하기

![_2020-07-20__11.53.50.png](~@img/panopticon/_2020-07-20__11.53.50.png)

1. CloudTrail → 추적 생성

### (0) 추적 속성 선택

![_2020-07-20__11.57.31.png](~@img/panopticon/_2020-07-20__11.57.31.png)

- 추적 이름 지정
- 스토리지 위치 지정 - 새 S3 버킷에 생성해도 되고, 기존 버킷을 이용해도 OK

![_2020-07-20__11.57.37.png](~@img/panopticon/_2020-07-20__11.57.37.png)

- KMS를 사용한다면 KMS 키 설정

![_2020-07-20__11.59.15.png](~@img/panopticon/_2020-07-20__11.59.15.png)

- Log를 남기겠습니다.
- IAM 역할을 지정
    - 새로 만들어야 한다면 `> 정책문서` 를 클릭하여 나오는 JSON을 참고하여 생성
- `다음`

### (1) 로그 이벤트 선택

![_2020-07-20__12.59.21.png](~@img/panopticon/_2020-07-20__12.59.21.png)

- 수정된 목록만 받아 볼 예정이기 때문에 API 활동 → 쓰기 에만 체크 합니다.
- `다음`
    - 검토 및 생성

![_2020-07-20__1.08.19.png](~@img/panopticon/_2020-07-20__1.08.19.png)

## 2. serverless-framwork 로 작성한 코드 사용하기

### (1) Panopticon 받기

[narashin/AWS-CloudTrail-Panopticon](https://github.com/narashin/AWS-CloudTrail-Panopticon)

🔼Panopticon 받기

### (2) serverless 설치

```bash
$ npm i -g serverless
```

### (3) deploy 전 환경변수 설정하기

- `serverless.yml` 생성

```jsx
service: cloudwatch-ec2-sg

provider:
  name: aws
  runtime: nodejs12.x
  stage: dev
  region: <Region>
  iamRoleStatements:
    - Effect: "Allow"
      Action:
        - "ec2:DescribeSecurityGroups"
      Resource: "*"
  environment: 
    SLACK_URL: "<보낼 채널의 WEBHOOK_URL>"

functions:
  panopticon:
    handler: handler.panopticon
    events:
      - cloudwatchEvent:
          event:
            source:
              - "aws.ec2"
            detail-type:
              - "AWS API Call via CloudTrail"
            detail:
                eventSource:
                    - "ec2.amazonaws.com"
                eventName:
                    - "CreateSecurityGroup"
                    - "DeleteSecurityGroup"
                    - "RevokeSecurityGroupIngress"
                    - "RevokeSecurityGroupEgress"
                    - "AuthorizesecuritygroupIngress"
                    - "AuthorizesecuritygroupEgress"
```
- Nodejs12.x
- iamRole : `"ec2:DescribeSecurityGroups"` 허용
- CloudwatchEvent On
    - EC2 Event Source 들
        - "CreateSecurityGroup"
        - "DeleteSecurityGroup"
        - "RevokeSecurityGroupIngress"
        - "RevokeSecurityGroupEgress"
        - "AuthorizesecuritygroupIngress"
        - "AuthorizesecuritygroupEgress"

### (4) `sls deploy` 하기

```bash
$ sls deploy
```

- 먼저 프로그래밍 방식의 IAM AWS Access Key, Secret Key로 aws configure가 작성 되어있어야 함.
    - `aws configure` 로 확인.
- Serverless 가 설치되어 있어야 함.
- Slack Webhook URL이 설정되어 있어야 함.

## 3. 실제 동작 화면

### (1) 보안그룹 생성

![_2020-07-20__1.43.36.png](~@img/panopticon/_2020-07-20__1.43.36.png)

### (2) 보안그룹 삭제

![_2020-07-20__1.42.49.png](~@img/panopticon/_2020-07-20__1.42.49.png)

### (3) 보안그룹 수정

![_2020-07-20__1.43.51.png](~@img/panopticon/_2020-07-20__1.43.51.png)

- 보안그룹 상세 추가 수정

![_2020-07-20__1.43.24.png](~@img/panopticon/_2020-07-20__1.43.24.png)

- 보안그룹 상세 삭제