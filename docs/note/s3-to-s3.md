---
title: s3 bucket에서 s3 bucket으로 약 1000만개 파일 옮기기
description: 주어진 시간 안에 1000만 여개 파일 퍼다 나르기 도전기
tags: ['Python', 's3', 's5cmd']
sidebar: auto
---

# {{ $frontmatter.title }}

협력 업체에서 본인들의 데이터를 다운받을 수 있게 getObject 권한을 **일시적**으로 주었다. 그것은 단 한달.

우리가 받아야 하는 데이터는 평균 6.26MB 크기로, 대략 1000만개 이상의 mp3 파일들이다.

# 가장 쉬운 방법 SRR

![giphy.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9ac34910-ede9-46f7-bb96-a1a3e0ca5abe/giphy.gif)

SRR은 동일 리전 복제(Same Region Replication)의 줄임말로 AWS에서 정식으로 지원하고 있는 기능이다. 새로 업로드된 S3 객체를 동일한 AWS 리전에서 대상 버킷으로 비동기식 자동 복제를 지원한다.

이 때까지만 해도 데이터가 실시간으로 올라오고 우리는 실시간 sync에 가깝게 bucket을 **복사**한다고 착각했기 때문에 가장 먼저 떠오른 방법이다. 하지만 신작을 copy하는 것이 아닌 구작을 뒤늦게 받아오는 작업이었고 다른 방법이 필요했다.

## 😵 새로 올라오는 데이터가 아닌데?

(물론 교차 계정 SRR에도 권한 조정 문제가 필요하지만) SRR을 쓰지 않고 버킷에서 버킷으로 copy를 하려고 한다면, 소스 버킷의 Bucket policy에서 데스티네이션 버킷에 권한을 따로 풀어주는 선언문이 필요했다.

하지만 소스 버킷의 bucket policy 는 우리가 건드릴 수 있는 영역이 아니었다. (이부분에서 안일하게 생각했던 것이, 과거 경험에서는 "제가 말한대로 바꿔야 가격효율적입니다."라고 말하면 바로 바꿔주는 고객을 많이 만났기 때문에 당연히 bucket policy도 쉽게 바꿀 수 있을 것이라고 생각했다.)

### + 우리가 건드릴 수 있는 영역~권한~이 아닌데?

권한을 조정하면 bucket에서 bucket으로 직접 전송이 가능하기 때문에 불필요한 단계를 많이 건너뛸 수 있는데, 이를 할 수 없게 되었으니 다른 방법을 강구해야 했다.

# Charon

Ralph가 Boto3를 이용하여 만든 Worker 

![687474703a2f2f696d67322e72756c697765622e636f6d2f696d672f696d675f6c696e6b372f3530342f3530333031355f362e6a7067.jpeg](~@img/s3-to-s3/1-687474703a2f2f696d67322e72756c697765622e636f6d2f696d672f696d675f6c696e6b372f3530342f3530333031355f362e6a7067.jpeg)

이미 위와 같은 여러 좌절적인 케이스를 경험한 랄프는 S3 Import를 도와줄 워커를 직접 만들기로 결심한 것 같았다. (내가 팀에 합류한 이후에도 한번더 더 쉬운 방법이 없는지 물어보셨지만, 본인이 리서치한 결과와 크게 다르지 않아서 많이 실망하셨을 것 같다.)

그리고 랄프가 만든 카론이 열심히 S3 Import 작업을 하고 있었다. 

- Python
- pod에서 작동중 (m5.xlarge)
- import 속도 : 1초 약 1.3개

하지만 카론의 속도로는 24시간 풀로 돌아가도, 모든 파일을 받아오는 데에 대략 *90여일*이 걸려 마감기한까지 데이터를 모두 받아올 수 없는 상황이었다.

python 으로 되어있는 boto3와, 워커가 올라가 있는 인스턴스의 네트워크 대역폭이 가장 큰 한계점이라고 생각했다.

# s5cmd

이 때 떠오른 것이 s5cmd 이다. go로 만들어져있고 여러 tcp 연결을 더 잘 활용하여 개체 저장소로 더 많은 데이터를 전송하여 매우 빠르다는 [벤치마크 포스팅](https://joshua-robinson.medium.com/s5cmd-for-high-performance-object-storage-7071352cc09d)을 본 기억이 나서 이를 차용해보기로 했다.

[Parallelizing S3 Workloads with s5cmd | Amazon Web Services](https://aws.amazon.com/ko/blogs/opensource/parallelizing-s3-workloads-s5cmd/)

## 사용법

![s5cmd-3a.gif](~@img/s3-to-s3/2-s5cmd-3a.gif)

사용법은 간단하다. golang을 먼저 설치하고, s5cmd를 설치.

```bash
go get -u github.com/peakgames/s5cmd
```

s3를 이용할 AWS 계정의 Credentials file을 작성한다. `~/.aws/credetials`

```bash
[default]
aws_access_key_id = XXXXXXX
aws_secret_access_key = YYYYYYYY
```

### 다운로드

**하나의 파일을 받을 때**

```bash
s5cmd cp s3://prod-wmg-s3delivery/DSP_7804/20210925132945877/ .
```

**여러개 파일을 받을 때**

```bash
s3://prod-wmg-s3delivery/DSP_7804/20210925132945877/
s3://prod-wmg-s3delivery/DSP_7804/20210925132945234/
s3://prod-wmg-s3delivery/DSP_7804/20210925132342137/
```

와일드카드를 쓸 수 있다.

```bash
s5cmd cp 's3://prod-wmg-s3delivery/DSP_7804/2021092513*' .
```

### 업로드

**하나의 파일만 올릴 때**

```
s5cmd cp object.gz s3://music-distributor/wmg/New\ Release/

```

**여러개 파일을 올릴 때**

```
/s5cmd cp '20210925*' s3://music-distributor/wmg/New\ Release/

```

### 주의할 점

이미 작업을 할 EC2 Instance에 데스티네이션 bucket에 대한 Role이 지정되어 있으므로, 인스턴스 내에서 `aws configure` 를 통해 credentials값을 재정의하면 EC2 Role이 덮어씌워짐. 

## 결과

![0_80gJDQySaSwU9qWQ.png](~@img/s3-to-s3/3-0_80gJDQySaSwU9qWQ.png)

> 우리가 받아야 하는 데이터는 평균 6.26MB 크기로, 대략 1000만개 이상의 mp3 파일들이다.
> 
- Import 속도 :
    - (로컬) 1초 약 2.25개

### c5n.xlarge - 네트워크 대역폭이 큰 인스턴스 사용

회사에서 지급해준 맥북프로(i9 8core, 32GB)로 회사 네트워크를 사용하여 s5cmd를 통해 S3 Import를 할 때 걸린 시간은 초당 2.25개로 카론의 속도보다 약 2배 빨라졌음을 알 수 있었다. s5cmd의 성능이 로컬 테스트를 통해 어느정도 입증이 되어, 이를 더 좋은 환경에서 구동시켜 효율을 극대화 시키고자 했다.

기존 카론이 돌아가는 m5.xlarge 사양의 pod이 아닌 네트워크 대역폭이 훨씬 큰 인스턴스를 사용하면 어떻게 될까?

#### m5.xlarge vs. c5n.xlarge
![](~@img/s3-to-s3/5-2022-07-213.06.47.png)

> C5n의 ENI(탄력적 네트워크 인터페이스)는 최대 32개의 대기열(C5 및 C5d의 경우 8개)을 사용을 통해 모든 vCPU들에 더욱 효율적으로 분산되는 패킷 처리 워크로드를 가능하게 합니다.
> 
- Import 속도
    - (c5n.xlarge) 1초 약 11.48개

![스크린샷 2021-11-08 오전 7.23.42.png](~@img/s3-to-s3/4-2021-11-087.23.42.png)

S3 Import 속도가 비약적으로 증가했다. Charon 을 이용 했을 때보다 **약 8.8배** 속도 증가를 체감할 수 있었다.

현재는 c5n.xlarge 인스턴스 2대를 이용하여 S3 Import 작업을 계속하고 있으며, 작업 착수일인 11월 2일부터 지금까지 약 376만여개의 객체를 받아올 수 있었다.