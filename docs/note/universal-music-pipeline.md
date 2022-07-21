---
title: 협력 업체 음원 수급 자동화를 위한 파이프라인 만들기 B (구성하기)
description: 협력 업체가 만든 프로그램만 이용해서 받을 수 있다! 이것을 자동화 해봅시다
tags: ['AWS']
sidebar: auto
---

# {{ $frontmatter.title }}

::: tip 챌린지
{{ $frontmatter.description }}
:::

## 파이프라인 구성 아키텍처

![architecture](~@img/universal-music-pipeline/1-universal_final_pipeline.png)

## 아키텍처 설명
1. `GET Order IDs` :: Lambda
    1. UCS 에 공개된 데이터를 받아온다.
    2. 받아온 데이터는 Log에 저장 되며 이는 CloudWatch Logs Subscribe Filter를 거쳐 Order ID가 있을 경우 CHECK Order ID를 트리거 한다.
2. `CHECK Order ID` :: Lambda
    1. Order ID를 기처리 여부를 판단한다. 
    2. 처리 할 데이터는 DynamoDB Table에 기록되며(최대 1일간 보관됨), 기 처리된 데이터는 이미 기록되어있으므로 파이프라인이 이대로 종료된다.
        1. DynamoDB에 기록되는 데이터는 DynamoDB Stream에 의해 상태(Insert, Modify, Delete)가 감지된다. 
    3. Insert 상태가 감지되면 ECS Task를 트리거 한다.
3. `TRIGGER ECS Task` :: Lambda
    1. 2에서 트리거 된 정보가 그대로 넘어와 ECS Task를 활성화 시킨다.
4. `GET Universal Music` :: ECS Task
    1. ECS Task는 Order ID에 따른 파일들을 받아와 EFS에 저장하는 작업을 수행한다.
5. DataSync
    1. DataSync는 주기적으로 EFS의 데이터를 S3에 옮기는 작업을 수행한다.