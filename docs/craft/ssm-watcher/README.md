---
title: SSM Watcher
description: AWS Session Manager 를 통해 세션이 열리는 것을 감지하여 Slack으로 알려줍니다.
tags: ['AWS', 'ssm', 'Serverless']
sidebar: auto
---

# {{ $frontmatter.title }}

::: tip 목표
{{ $frontmatter.description }}
:::

![~@img/ssm-watcher/ssm-watcher_4.21.16.png](~@img/ssm-watcher/ssm-watcher_4.21.16.png)

# 0. 목적

AWS Session Manager를 통해 접근하는 인스턴스(접근 대상)와 접근 주체, 접근 시간, 접근 장소(Source IP)를 알려준다.

# 1. `setting.yml`

```json
SLACK_WEBHOOK_URL: "" #SLACK WEBHOOK URL
REGION: ap-northeast-2 #Target Region
```

# 2. 그외

SSM Watcher는 Serverless Framework를 이용하여 만들어졌으며 기본적으로 Serverless Framework가 설치되어 있는 환경에서 deploy 가능합니다.

> [https://www.serverless.com/](https://www.serverless.com/)

---

:::tip
설치를 하고 싶다면
:::

# SSM-Watcher 사용방법

1. serverless framework 설치

[Serverless Getting Started Guide](https://www.serverless.com/framework/docs/getting-started/)

2. 본 프로그램을 돌릴 로컬환경에서 AWS Config/Credential 설정(세션

```bash
$ ~/.aws/credential
```

- `credentials` 에서 Access key와 Secret Access key 설정

```bash
$ ~/.aws/config
```

- `config` 에서 region, profile 설정

3. `git clone`

[GitHub - narashin/ssm-watcher: Tool to detect when your session is activated.](https://github.com/narashin/ssm-watcher)

4. clone한 폴더 내에서 `npm i` 로 패키지 설치

```bash
$ npm i
```

5. `setting.yml` 수정

```yaml
SLACK_WEBHOOK_URL: '' #SLACK WEBHOOK URL
REGION: ap-northeast-2 # Target Region
PROFILE: default # 사용할 AWS Profile (2에서 설정)
```

- SLACK_WEBHOOK_URL : 알림을 받을 Slack Webhook URL 설정
- REGION : 사용할 Region 설정
- PROFILE : 사용할 AWS Profile 설정

6. `sls deploy` 로 배포

```bash
$ sls deploy
```

![~@img/ssm-watcher/ssm-watcher_1.15.08.png](~@img/ssm-watcher/ssm-watcher_1.15.08.png)

7. 세션 매니저를 통해 세션이 시작되면,

![~@img/ssm-watcher/screenshot.png](~@img/ssm-watcher/screenshot.png)

위와 같은 알림 발송
