---
title: AWS Price Checker
description: 회사에서 쓸 AWS Price List를 Serverless로 만들기
tags: ['NodeJS', 'AWS', 'Fargate', 'CloudWatch']
sidebar: auto
---

# AWS Pricechecker - Serverless Architecture

:::tip 코드
코드는 회사 빌링 정보가 포함되어 있어 공개가 불가하다. 아쉽지만 아키텍처만 설명합니다.
:::

## 0. 시나리오

![~@img/aws-pricechecker/pricechecker-architecture.png](~@img/aws-pricechecker/pricechecker-architecture.png)

- AWS Pricelist API가 업데이트 되면 이를 자동으로 감지하여, 원하는 방식으로 데이터를 처리한 뒤 Google Spreadsheet 에 넣고 싶다. 이 작업이 완료 되면 Slack으로 업데이트를 알리는 메시지를 보내고 싶다.

(1) Pricelist API 업데이트를 SNS로 받는다.

(2) SNS는 Fargate task를 돌릴 수 있는 Lambda를 트리거 한다.

(3) Lambda는 Fargate task를 돌리고, Container의 작업이 완료 되면 Fargate는 Stopped 된다.

(3-1) Google Spreadsheet 에 데이터가 들어간다.

(3-2) Container 작업 완료로 Stopped된 상황을 Cloudwatch Event로 캐치한다.

(4) (3-2)를 통해 캐치한 상황로 Lambda를 트리거 한다.

(4-1) Lambda는 업데이트 상황을 Slack으로 알려준다.

## 1. Pricelist API 의 변경을 SNS으로 받아보기

[AWS Price List API 사용](https://docs.aws.amazon.com/ko_kr/awsaccountbilling/latest/aboutv2/price-changes.html)

AWS는 각종 서비스 및 리소스의 가격을 Price List API로 제공한다.

이를 SNS으로 구독하면 (1) 변경 될 때 또는 (2) 하루에 한 번 PriceList API를 받아볼 수 있다.

![~@img/aws-pricechecker/aws-pricechecker_8.38.30.png](~@img/aws-pricechecker/aws-pricechecker_8.38.30.png)

- 반드시 미국 동부(버지니아 북부)로 리전을 선택할 것 `{ region : us-east-1 }`
- 구독으로 기존 알림 ARN 참조하기
  - 서비스 가격 변경시마다 알림 받기 `arn:aws:sns:us-east-1:278350005181:price-list-api`
  - 하루에 한번 가격 변경에 대한 알림 받기 `arn:aws:sns:us-east-1:278350005181:daily-aggregated-price-list-api`
  - Savings Plans 가격 `arn:aws:sns:us-east-1:626627529009:SavingsPlanPublishNotifications`

## 2. Fargate task를 실행하기

### (1) Fargate

![~@img/aws-pricechecker/aws-pricechecker_5.59.52.png](~@img/aws-pricechecker/aws-pricechecker_5.59.52.png)

- 먼저 클러스터를 생성한다
  - 클러스터 이름, VPC 새 생성 여부 등을 설정
- ECR에 올린 이미지를 ECS on Fargate용 Image로 사용한다
  - Docker 이미지를 올리기 위해 Dockerfile을 미리 작성하여 ECR 에 푸시
- ECS의 **예약된 작업**의 경우 Cloudwatch Event에서 지원하는 이벤트에만(또는 Cron잡 가능) 걸 수 있으므로(SNS로 받는 구독에 대해서는 불가) Lambda로 트리거 한다

### (2) Lambda

SNS로 트리거 될 Lambda 함수로서, ECS Task를 Run 시킨다.

```jsx
const AWS = require('aws-sdk');

exports.handler = async (event) => {
  const ecs = new AWS.ECS({
    apiVersion: '2014-11-13',
    region: 'ap-northeast-2',
  });
  const params = {
    cluster: '클러스터명',
    launchType: 'FARGATE',
    taskDefinition: '작업:(latest는 불가. 특정 버전 숫자를 넣어야함)',
    networkConfiguration: {
      awsvpcConfiguration: {
        assignPublicIp: 'ENABLED',
        subnets: ['서브넷ID', '서브넷ID'],
        securityGroups: ['보안그룹ID'],
      },
    },
  };
  return ecs.runTask(params).promise();
};
```

[RunTask](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html)

![~@img/aws-pricechecker/aws-pricechecker_10.51.31.png](~@img/aws-pricechecker/aws-pricechecker_10.51.31.png)

## 3. Cloudwatch로 작업완료를 파악하여 Slack으로 알려주기

- Task내의 이미지가 작업을 마치고 컨테이너가 내려오면, ECS Task도 함께 Stopped 되는데 이를 캐치하기 위한 이벤트 규칙 정한다.
- 이 규칙을 통해 원하는 작업이 완료 되었음을 캐치하여, Slack 등의 알림 서비스로 알려줄 수 있다.

### (1) Cloudwatch Events

![~@img/aws-pricechecker/aws-pricechecker_10.34.21.png](~@img/aws-pricechecker/aws-pricechecker_10.34.21.png)

- Cloudwatch Event → 규칙 에서 이벤트 패턴을 설정한다.
  - ecs, Task State Change, STOPPED, (Essential container in task exited)

### (2) Slack

![~@img/aws-pricechecker/aws-pricechecker_10.51.55.png](~@img/aws-pricechecker/aws-pricechecker_10.51.55.png)

Slack Webhook을 이용하여 작업 완료 Message를 보낸다.
