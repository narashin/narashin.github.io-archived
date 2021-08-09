---
title: AWS Chatbot을 이용한 운영 이벤트 알림 설정
description: AWS Chatbot을 이용한 운영 이벤트 알림 설정
tags: ['AWS', 'Chatbot']
---

# AWS Chatbot을 이용한 운영 이벤트 알림 설정

## AWS Chatbot의 지원 채팅 클라이언트

- Amazon Chime
- Slack

# Chatbot 구성하기

### (1) 채팅 클라이언트 구성

![~@img/aws-chatbot/_2020-05-28__10.39.37.png](~@img/aws-chatbot/_2020-05-28__10.39.37.png)

- 본 가이드에서는 채팅 클라이언트를 Slack 으로 진행한다.

![~@img/aws-chatbot/_2020-06-01__1.31.52.png](~@img/aws-chatbot/_2020-06-01__1.31.52.png)

- 로그인 되어있는 Slack Workspace가 있다면 Integration에 대한 Permission 수락 페이지가 뜬다.

![~@img/aws-chatbot/_2020-06-01__1.32.15.png](~@img/aws-chatbot/_2020-06-01__1.32.15.png)

- `Allow(수락)` 을 했다면 구성된 클라이언트에 위에서 연결한 Slack WorkSpace가 뜬다.

### (2) 클라이언트에 대한 채널 구성

![~@img/aws-chatbot/_2020-06-01__1.34.57.png](~@img/aws-chatbot/_2020-06-01__1.34.57.png)

- `새 채널 구성` 을 클릭하면 위와 같이 채널 구성 화면이 나온다.
- 구성 이름을 설정해주고, 로깅 여부에 대해 선택한다.
- ChatBot이 활동할 Slack 채널에 대한 정보를 입력한다. (위에서는 퍼블릭 채널의 idx-build 채널로 설정하였다.)

![~@img/aws-chatbot/_2020-06-01__1.35.04.png](~@img/aws-chatbot/_2020-06-01__1.35.04.png)

- CloudWatch 지표에 엑세스하고 명령을 실행하며, 알림 작업에 응답할 Chatbot IAM Role이 필요하다. 따로 설정해줄 필요 없이 `템플릿을 사용하여 IAM 역할 생성` 을 선택해주면 내가 지정한 역할 이름으로 Chatbot IAM Role이 생성 된다.

![~@img/aws-chatbot/_2020-06-01__2.01.11.png](~@img/aws-chatbot/_2020-06-01__2.01.11.png)

- (선택사항) 생성해둔 SNS 를 연결하여 채팅 클라이언트로 이벤트를 내보낼 수 있다.

### (3) In Slack

![~@img/aws-chatbot/_2020-06-01__2.08.45.png](~@img/aws-chatbot/_2020-06-01__2.08.45.png)

- 위의 설정을 토대로 Dynamodb 의 ConnsumedReadCapacityUnits 메트릭이 특정 수치가 넘으면 알림이 오게 테스트 봇을 생성하였다.
  - 리전, 계정, 경보 이름, 경보 상태, 이름, 경보가 울린 리소스의 이름, 경보가 적용된 메트릭, 그래프 가 알림에 포함 된다.

## Note

- AWS Chatbot 을 이용한 메시지는 포맷이 정해져있기 때문에 Custom한 포맷으로 지정 불가능. 보내고 싶은 포맷이 따로 있다면 Lambda에 슬랙 구현체를 따로 붙여 사용해야함.
