---
title: 협력 업체 음원 수급 자동화를 위한 파이프라인 만들기 A (구상하기)
description: 협력 업체가 만든 프로그램만 이용해서 받을 수 있다! 이것을 자동화 해봅시다
tags: ['AWS']
sidebar: auto
---

# {{ $frontmatter.title }}

::: tip 챌린지
{{ $frontmatter.description }}
:::

## 0. 아이디어

1. 협력업체는 Teleport라는 프로그램을 이용하여 파일들을 전달해준다.
2. Teleport는 jar로 되어있다.
    1. Lambda를 이용하여 jar를 돌리기
    2. Batch/ECS를 이용하여 jar를 돌리기
        1. Docker를 이용

## 1. Lambda를 이용하여 jar 돌리기 —> 불가

최초 아이디어는 Lambda를 이용한 것이었으나, AWS Lambda는 임시 저장소의 크기가 512MB 밖에 되지 않는다.

![스크린샷 2022-01-27 오전 9.10.31.png](~@img/universal-music-pipeline/1-2022-01-279.10.31.png)

협력업체에서 받아올 때 하나의 단위인, order ID 대로 받아온다는 가정하에 최소 Order Size가 512MB보다 훨씬 크기 때문에 Lambda를 이용하는 것은 불가능 할 것이다.

하지만 Lambda를 이용하는 방법을 강구하자면...

![스크린샷 2022-01-27 오전 9.10.39.png](~@img/universal-music-pipeline/2-2022-01-279.10.39.png)

Order ID내 세부 단위로 들어가서 개별 파일들을 받아올 수도 있다.

### 어려움

그렇지만 이런 방법을 실제 서비스를 도입했을 때,

(1) 아직은 예상하기 어렵지만, 개별 파일이 512MB를 넘길 가능성이 있음

(2) 개체수가 많아지면 관리하기 어려워짐

- 오류가 발생했을 때 CloudWatch Logs 등을 이용하여 역추적하기가 매우 어려울 것

등의 어려움이 있다.

## 2. AWS Batch(Fargate) 등 컨테이너를 이용하여 jar 돌리기

EC2, Fargate를 선택하여 docker를 돌릴 수 있다.

![Untitled Diagram.drawio.png](~@img/universal-music-pipeline/3-UntitledDiagram.drawio.png)

### 고려해야하는 점

- Docker 작업
- 데이터 볼륨 확인
    - 지금은 TEST 데이터만(2개의 Order ID) 전달받은 상황이지만, 전체를 공유 받았을 때 **어떤 주기로 어떤 크기만큼 받아올지** 결정해야 데이터 볼륨을 미리 정할 수 있다.
        - EFS
            - 파일을 추가하고 제거할 때마다 스토리지 용량이 탄력적으로 자동 확장, 축소 됨. 영구 스토리지로서 사용 가능
        - Fargate 기본 임시 스토리지
            - 21GiB - 200GiB 까지 사용 가능하며, 컨테이너가 종료되면 해당 데이터도 날아가게 됨 → 이 경우 S3까지 옮기는 작업을 완벽하게 마무리 해야함.

### 요금

### Fargate

- 별도의 선결제 금액 없이 컨테이너의 CPU, Memory 사용량에 기반하여 초 단위로 요금이 과금 됨. (Docker로 이미지 풀링을 시작하는 시점부터 해당 작업이 종료될 때까지)

### EC2

- RI는 사용이 불가능하며, Spot 으로 사용 가능. (온디맨드 대비 최대 70% 절약 가능) — 다만 Spot 인스턴스는 언제든 종료될 수 있으므로 실제 서비스에서 사용하는 것은 위험 부담이 있음.

### EFS

- 서울 리전 기준 0.09 USD/GB

### Data Sync

- EFS → S3 파일 전송 (요금이 발생하기 때문에 굳이 이를 이용하지 않고 S3 API 를 이용해서 옮기는게 비용효율적으로 생각됨.)
- 0.0125 USD/GB

### 요청 해야하는 권한 — 개인 계정에서 FullAdmin 권한으로 진행해서 정확하지 않을 수 있음

- Batch 작업에 필요한 권한
    - AWSBatchServiceRole
- EFS 생성/읽기/목록 작업에 필요한 정책 등 

후일담
: 이 파이프라인을 진행하면서 사실상 Role/Policy 와의 전쟁이었음