---
title: Shieldee
description: DDoS 대응 툴
tags: ['AWS', 'Kinesis', 'Lambda', 'Nginx', 'Fluentd']
sidebar: auto
---

# {{ $frontmatter.title }}

::: tip 목표
{{ $frontmatter.description }}
:::

## A. Cloudflare 의 Advanced DDoS 를 이용한 방어 전략

1. 봇넷을 통해 공격이 들어오면 데이터베이스에 부하가 발생하고, 서비스 요청이 정상적으로 처리되지 않는다
2. 서비스 운영자는 이를 확인하고 Cloudflare 에서 **I'm Under Attack** 모드를 활성화한다
3. 하지만 언젠가부터 **I'm Under Attack** 을 통과하는 방식의 공격이 발생하였다
4. 이를 방어하기 위해서 **Rate Limiting** 을 사용하여 방어하려고 하였으나, **Rate Limit** 집계 시점 이전에 이미 방대한 요청이 들어오기 때문에, **능동 방어에는 시간이 걸린다(1분 이상)**

## B. AWS WAF Security Automations Template을 이용한 방어 전략

![](~@img/shieldee/waf-securityAutomationtemplate.png)

1. 봇넷을 통해 공격이 들어오면 데이터베이스에 부하가 발생하고, 서비스 요청이 정상적으로 처리되지 않는다
2. CloudFront 또는 Application Load Balancer 에서 Access Logs 를 활성화하고, S3에 저장하도록 한다
3. S3에 Access Log가 적재된 이후에, Amazon Athena 가 해당 로그를 **5분 단위로 집계**하여, 지정한 요청 임계치를 초과한 IP들을 AWS WAF IP Set에 추가한다

- 마찬가지로 집계 시점 이전에 이미 방대한 요청이 들어오므로, **대응이 느리다(5분 이상)**

## C. Shieldee 의 대응 시나리오

![](~@img/shieldee/shieldee.png)

1. 봇넷을 통해 공격이 들어오면 앞단 NGINX 에서 지정된 Rate Limiting 정책에 해당하는 개별 IP들을 에러 로그로 떨어뜨린다.
2. 해당 에러 로그를 탐지하자마자 곧바로 엣지 WAF 에 룰셋으로 해당 IP를 블락한다.
   - 엣지 영역에서 블락하지 못한 트래픽들을 위한 최후방어선으로 동작하며,
   - **Rate Limiting 탐지 이후 3초 안에 블락한다.**
3. 일시적인 오탐 등을 고려하여 1시간 뒤에 해당 IP들을 해제한다.

## 2. 동작 방식

1. 봇넷을 통해 공격이 들어오면, NGINX 의 **Rate Limiting** 기능으로 개별 IP들의 초당 요청 수를 제한하도록 한다
   1. 이 때의 **Rate Limiting** 대상은 동적 컨텐츠 요청 영역으로만 한정한다
2. **Rate Limiting** 에 적용된 IP 들은 NGINX 에러 로그 파일로 기록이 된다.
3. **fluentd** 로 에러 로그를 테일링(Tailing) 하여, **Rate Limiting** 로그 형식에 맞춰서 정규표현식으로 캡처를 한다
4. 캡처된 내용을 **Amazon Kinesis Data Streams** 로 전달하고,
5. **Kinesis Data Streams** 에서 트리거링된 **AWS Lambda** 가 동작하여, 전달된 IP를 **DynamoDB**에 기록한다.
6. 기록된 정보는 **DynamoDB Streams** 로 **AWS Lambda** 에 전달되는데, 이 때 해당 IP를 Cloudflare Access Rule 에 Block 모드로 추가한다
   1. Access Rule 에 추가하고 반환받은 Access Rule Id를 **DynamoDB** 에 기록한다
   2. 이 때, `expirationTime` 속성을 TTL 로 추가하고, 기본 TTL을 3600(1시간)으로 지정한다.
7. **DynamoDB** 에서 TTL 이 경과된 항목이 삭제되면서, 해당 내용이 **DynamoDB Streams** 을 통해서 **AWS Lambda** 로 트리거링된다.
   1. **DynamoDB** 에 기록된 Access Rule Id 으로 Cloudflare Access Rule 에 등록된 IP를 해제한다
