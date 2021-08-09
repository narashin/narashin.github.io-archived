---
title: CloudWatch와 SNS을 통한 MediaLive Alert 알람 생성
description: CloudWatch와 SNS을 통한 MediaLive Alert 알람 생성
tags: ['AWS', 'CloudWatch', 'SNS', 'MediaLive']
---

# CloudWatch와 SNS을 통한 MediaLive Alert 알람 생성

# 시나리오

1. MediaLive에 Alert이 발생한다.
2. CloudWatch가 이를 감지하여 SNS를 트리거링.
3. SNS에 등록된 프로토콜(본 문서에서는 Email)로 해당 내용을 전송한다.

## 1. SNS 설정하기

![~@img/medialive-alert/2018-08-2916.09.12.png](~@img/medialive-alert/2018-08-2916.09.12.png)

[SNS] > [주제] > [새로운 주제 생성]

1. [SNS] → [주제] → [새로운 주제 생성] 으로 새 주제를 생성한다.
2. 생성된 주제의 ARN 링크를 클릭하여 [주제 세부 정보]로 들어간다.
3. [구독] → [구독 생성]을 클릭한다.

   ![~@img/medialive-alert/2018-08-2916.12.56.png](~@img/medialive-alert/2018-08-2916.12.56.png)

   [주제 세부 정보] > [구독 생성]

4. 원하는 프로토콜과 엔드포인트를 설정한다.

   ![~@img/medialive-alert/2018-08-2916.19.28.png](~@img/medialive-alert/2018-08-2916.19.28.png)

   [확인 작업 대기중]

5. (Email의 경우 등록한 이메일로 발송된 Subscription Confirm 메일을 따로 확인해주어야 등록이 완료된다.)

## 2. CloudWatch 설정하기

1. [CloudWatch] → [이벤트/규칙] → [규칙 생성]으로 새 규칙을 생성한다.

   ![~@img/medialive-alert/2018-08-2915.59.52.png](~@img/medialive-alert/2018-08-2915.59.52.png)

   [CloudWatch] > [서비스 이름] : MediaLive > [이벤트 유형] : MediaLive Channel Alert

2. 좌측 이벤트 소스에서 [이벤트 패턴]으로 [서비스 이름]과 [이벤트 유형]을 설정한다.

   ![~@img/medialive-alert/2018-08-2916.02.00.png](~@img/medialive-alert/2018-08-2916.02.00.png)

3. 우측 대상에서 [대상 추가]를 누르고 위에서 설정한 [SNS 주제]를 설정한다.
4. [세부 정보 구성]을 누르고 이벤트명을 설정한다.
5. 끝
