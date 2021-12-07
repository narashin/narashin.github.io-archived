---
title: 뽀모도로 기법을 이용한 방 조명 셋팅하기
description: 뽀모도로 기법을 이용한 방 조명 셋팅하기 — 그런데 Cloudwatch Event와 Lambda, 필립스 Hue를 곁들인
tags: ['Python', 'Lambda', 'ToyProject']
sidebar: auto
---

# {{ $frontmatter.title }}

::: tip 목표
{{ $frontmatter.description }}
:::


얼마전 이직한 회사에서 재택근무를 시행하고 있었고, 평소 해보지 않은 재택근무에 집중을 하기 어려웠던 나는 어떤 방법을 강구해야 했다. (왜인지 모르겠지만 뭐가 들었는지 뻔한 냉장고 문을 30분에 한번씩 열어보는 이상한 습관? 버릇?이 생겼다.) 그러다 얼마 전에 [rainygirl님의 <규칙적 휴식을 강제하는 작업환경을 꾸며보자>](https://rainygirl.github.io/2021/11/pomodoro-room-light-timer) 포스트를 읽게 되었다. 나는 휴식보다는 집중에 초점을 맞춰서, 집중을 강제하는 장치가 필요했으므로 위 포스트의 환경과 비슷한 환경을 내 방에도 똑같이 조성해보기로 했다. 

rainygirl님이 소개해주신 [뽀모도로 기법](https://ko.wikipedia.org/wiki/%ED%8F%AC%EB%AA%A8%EB%8F%84%EB%A1%9C_%EA%B8%B0%EB%B2%95)이나 [KMN 작업법](https://twitter.com/starlakim/status/648064735779254272?s=20)의 요는 **내가 집중할 수 있는 시간을 최대로 활용하여 집중하고, 나머지 시간에는 주위를 환기시킬 수 있도록 스트레칭을 하거나 차를 마시거나 짧게 다른 일을 하는 것**이었다. 사람마다 집중하기에 적절한 시간이 각자 다를 것이라고 생각한다. 나는 40분의 일하는 시간, 20분의 환기 시간을 갖도록 셋팅했다.

## 시나리오

- 매 40분은 오렌지 계열의 따뜻한 색으로 방 조명을 유지하고, 20분은 붉은색 계열의 색으로 방 조명을 바꾼다.
    - 단 매일 있는 화상 스크럼 시간에는 조명이 붉으면 안 되므로 따뜻한 색을 유지한다.
- 업무시간인 월요일부터 금요일, 오전 8시부터 오후 7시까지 작동한다.

## 준비물

- 스마트 조명이 필요하다.
    - 장비병이 있었던 나는 게이밍에 적합한 환경을 만들기 위해 이미 필립스 Hue 제품으로 방 조명을 셋팅해놓고 있었으므로, 이를 이용하면 되겠다고 생각했다.
- crontab을 돌리기 위한 환경이 필요하다.
    - rainygirl님은 라즈베이파이를 이용하셨으나, 당장 이 토이프로젝트를 ~~손민수 하기 위해~~ 라즈베이파이를 사는건 과한 것 같아 다른 방법을 강구했다. 내게 익숙한 AWS Cloudwatch EventBridge와 Lambda를 이용해서 이 환경을 대신하기로 했다. (프리티어 기준으로 월별 100만건의 호출이 무료이고, 비용이 발생한다고 해도 100만건 당 0.2USD가 청구되므로 비용상으로 큰 문제가 없다고 판단했다.)

## 뚝딱뚝딱 만들어보기

필립스 휴 브릿지는 DHCP를 사용하고 있었으므로 이를 해제하고 수동으로 설정해준다.

![IMG_3270.PNG](~@img/worklight/IMG_3270.png)

- Hue 앱을 켠다

![IMG_3271.PNG](~@img/worklight/IMG_3271.png)

- 환경 설정 > Bridge 설정

![IMG_3272.PNG](~@img/worklight/IMG_3272.png)

- 네트워크 설정

![IMG_3273.PNG](~@img/worklight/IMG_3273.png)

- DHCP 해제

### 포트포워딩 설정

외부(AWS Lambda)환경에서 접속할 수 있어야 하기에 무선공유기의 포트포워드 설정을 해준다.

![스크린샷 2021-12-07 오후 2.48.52.png](~@img/worklight/worklight_2.48.52.png)

1. ipTIME을 쓰고 있으므로 접속. (참고로 초기 비밀번호는 `admin`이다. 아이디도 admin)
2. 고급설정 > NAT/라우터 관리 > 포트포워드 설정

![스크린샷 2021-12-07 오후 2.52.14.png](~@img/worklight/worklight_2.52.14.png)

- 앱에서 확인한 Hue Bridge의 IP주소와 포트를 입력하고, 접속할 외부포트를 적당히 정해준 뒤 적용하면 된다.

### phue를 이용한 Lambda 코드 작성

```bash
$ pip install phue
```

```python
from datetime import datetime, time
from phue import Bridge

def handler():
    b = Bridge('나의 Hue Bridge 아이피')
    b.connect()

    # Yellow
    if time(0,00) <= datetime.utcnow().time() < time(1,40)
				...
        b.set_light([1, 3, 4], 'on', True)
        b.set_light([1, 3, 4], 'bri', 254)
        b.set_light([1, 3, 4], 'xy', convert_color('e69138'))
    # Red
    elif time(1,40) <= datetime.utcnow().time() < time(2,00)
				...
        b.set_light([1, 3, 4], 'on', True)
        b.set_light([1, 3, 4], 'bri', 254)
        b.set_light([1, 3, 4], 'xy', convert_color('cc0000'))
    # Off
    else:
        b.set_light([1, 3, 4], 'on', False)

def convert_color(hexCode):
    R = int(hexCode[:2], 16)
    G = int(hexCode[2:4], 16)
    B = int(hexCode[4:6], 16)

    total = R + G + B

    if R == 0:
        firstPos = 0
    else:
        firstPos = R / total

    if G == 0:
        secondPos = 0
    else:
        secondPos = G / total

    return [firstPos, secondPos]
```

`handler`에서 시간은 적당히 내가 원하는 시간을 커스텀하게 지정해주었고, (스크럼 시간이나 아주 이른 오전시간은 붉은 조명으로 바뀌는 시간에서 제외했다.) `convert_color` 에서는 [https://www.color-hex.com/](https://www.color-hex.com/) 를 통해 내가 원하는 색깔을 Hue가 원하는 색상의 값으로 변형해서 handler로 넘겨주도록 했다. 참고로 시간은 UTC 기준이다.

### AWS Lambda에 배포

![스크린샷 2021-12-07 오후 3.21.47.png](~@img/worklight/worklight_3.21.47.png)

- Lambda > 함수 > 함수생성

함수이름과 런타임을 지정하고 함수를 생성한다. 

이때 외부 패키지인 `phue` 는 자동으로 import 되지 않으므로 따로 레이어에 추가하는 작업이 필요하다. 레이어(계층)를 이용하여 따로 추가해도 되고, [zip 파일로 한번에 코드와 함께 올려도 상관없지만](https://docs.aws.amazon.com/ko_kr/lambda/latest/dg/python-package.html) 나는 따로 관리하기 위해 함수와 패키지레이어를 분리해서 올리려고 한다.

### 레이어 추가하기

```bash
$ pip install 모듈 -t .
```

위 명령어를 통해 생성된 모듈들을 zip으로 묶는다. 나는 `phue` 만 설치하여 압축했다.

- Lambda > 계층 > 계층생성
    
    ![스크린샷 2021-12-07 오후 3.32.49.png](~@img/worklight/worklight_3.32.49.png)
    

압축한 파일을 계층 구성을 통해 올려주면 된다.

### CloudWatch EventBridge를 통해 Trigger 연결

![스크린샷 2021-12-07 오후 3.37.29.png](~@img/worklight/worklight_3.37.29.png)

- Lambda 함수 상세 페이지 상단에 있는 `트리거 추가` 를 통해 EventBridge를 설정한다.

![스크린샷 2021-12-07 오후 3.39.35.png](~@img/worklight/worklight_3.39.35.png)

- EventBridge > 새 규칙 생성 을 통해 crontab을 대신할 스케쥴을 정해준다.

사실 이미 코드에 시간별 조명색을 다 정해놔서 언제 호출 되든 코드에 스태틱하게 박아놓은 색으로 변할테지만, 최소한의 호출만하기 위해 시간을 정해서 트리거링 하기로 했다. (너무 자주 호출하면 비용이 발생하기 때문에 신중 또 신중)

## 웁스! 오류 발생!

```bash
[ERROR] PhueRegistrationException: (101, 'The link button has not been pressed in the last 30 seconds.')
```

phue를 통해 Hue Bridge를 제어하면, 프로그램 구동 최초에 Hue Bridge의 물리버튼을 눌러줘야 내가 만든 프로그램이 register된다. 최초에는 이 작업을 해주지 않았기 때문에 위와 같은 오류가 발생했다.

브릿지의 물리버튼을 누르면 `.python_hue` 파일이 자동생성되어 그곳에 config 정보가 들어가게 되는데, 프로그램이 이 파일을 계속 사용하게 된다. 

```bash
[ERROR] OSError: [Errno 30] Read-only file system: '/.python_hue'
```

그러나, Lambda에서는 `/tmp/` 폴더에만 Write를 할 수 있고, 이는 임시 폴더로서 매번 삭제되어 프로그램이 해당 파일을 참조하지 못한다는 어려움이 있었다. `phue` 를 들여다보자.

```python
def __init__(self, ip=None, username=None, config_file_path=None):
	if config_file_path is not None: 
	     self.config_file_path = config_file_path 
	 elif os.getenv(USER_HOME) is not None and os.access(os.getenv(USER_HOME), os.W_OK): 
	     self.config_file_path = os.path.join(os.getenv(USER_HOME), '.python_hue') 
	 elif 'iPad' in platform.machine() or 'iPhone' in platform.machine() or 'iPad' in platform.machine(): 
	     self.config_file_path = os.path.join(os.getenv(USER_HOME), 'Documents', '.python_hue') 
	 else: 
	     self.config_file_path = os.path.join(os.getcwd(), '.python_hue')
```

위와 같은 구문을 찾을 수 있었다. config 파일의 path를 지정해줄 수 있는 것을 확인할 수 있다. 그러나 Lambda의 특성상 영구저장할 곳이 마땅치 않으므로, 매번 config 파일을 쓰는 것을 멈추고 그냥 ip, username 쪽에 값을 지정해주기로 했다.

이 코드를 수정하여 다시 패키지를 압축하고 Lambda 레이어에 올려주면 오류 수정 완완.

## 개선할 점

지금 당장이야 쓰는데에 별 문제는 없지만 Lambda 함수에 IP나 ID정보를 그냥 넣는건 좀 불안하다.    

Lambda > 함수 > 구성 > 환경 변수에서 해당 값들을 따로 관리해주는것이 좋겠다.

## 마무리

![IMG_3257-2.gif](~@img/worklight/IMG_3257-2.gif)

주말에 파이썬과 친해지기 위해 파이썬으로 뭘 해볼까 하다가 만들어본 프로젝트였다. 결과적으로 딱히 파이썬을 엄청나게 사용하진 않았지만, 뭔가 하나 만들었다는 성취감이 동력이 되어 더 열심히 공부하고자 하는 의지가 생긴 것 같다. 더불어 내가 알고 있는 것들이 완전히 쓸모없진 않았구나 하는 안도감도 조금 생긴 것 같다. 
   
이와 별개로 뽀모도로 기법이 효과가 있는지는 아직 잘 모르겠다. 일단 주어진 40분에는 최대한 집중을 해보려고 하는데 쉬는 시간 20분엔 어김없이 냉장고 문을 열기 때문이다. (이것은 단순히 나의 식욕/식탐과 더 깊은 관련성이 있을 것이라고 예상된다.) 모쪼록 더 높은 생산력을 낼 수 있는 내가 되길 바라며...