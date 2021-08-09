---
title: MediaLive 이중화 구성을 위한 MediaPackage 및 MediaLive 구성 및 설정 가이드
description: MediaLive 이중화 구성을 위한 MediaPackage 및 MediaLive 구성 및 설정 가이드
tags: ['AWS', 'MediaLive', 'MediaPackage']
---

# MediaLive 이중화 구성을 위한 MediaPackage 및 MediaLive 구성 및 설정 가이드

> 본 문서에서는 MediaLive Pipeline Failover 발생 시 Pipeline 절체를 위한 MediaPackage 및 MediaLive의 구성과 설정을 다룹니다.

# MediaPackage 생성 및 설정

![~@img/medialive-duplication/2018-09-0315.57.50.png](~@img/medialive-duplication/2018-09-0315.57.50.png)

MediaPackage → Channel 생성

1. AWS Elemental MediaPackage(이하 AEMP)의 채널을 생성합니다. 본 문서에서는 CTSPackage로 명명하였습니다. Next Step을 클릭합니다.

![~@img/medialive-duplication/2018-09-0316.02.58.png](~@img/medialive-duplication/2018-09-0316.02.58.png)

MediaPackage → (Requirement: channelID)Next Step → Create channel

2. Channel에 대한 상세를 정의할 수 있습니다. Input type은 Apple HLS만 가능합니다. CloudFront를 통해 Serving할 예정이므로 CloudFront distribution details의 Create a CloudFront distribution for this channel 항목을 선택한 후 Create를 클릭하겠습니다.

![~@img/medialive-duplication/2018-09-0316.07.00.png](~@img/medialive-duplication/2018-09-0316.07.00.png)

Channel 상세 정보

3. 생성한 Channel에 대한 정보가 출력됩니다.

- Inputs이 두 개입니다. MediaLive의 Pipeline A, B에 각각 연결시킬 것입니다.

  ![~@img/medialive-duplication/2018-09-0316.11.37.png](~@img/medialive-duplication/2018-09-0316.11.37.png)

  Channel > Endpoints

- Endpoints를 생성할 수 있습니다.
- CloudFront distribution에 대한 정보가 나옵니다. Endpoint와 연결됩니다.
- Channel operational metrics를 살펴볼 수 있습니다.

![~@img/medialive-duplication/2018-09-0316.12.48.png](~@img/medialive-duplication/2018-09-0316.12.48.png)

4. Endpoints의 Add endpoints를 눌러 Endpoints를 생성합니다. ID값을 넣고 Master Manifest의 파일명을 입력합니다.

![~@img/medialive-duplication/2018-09-0316.16.02.png](~@img/medialive-duplication/2018-09-0316.16.02.png)

5. Packager setting에서 Type과 Segment duration 등의 값을 설정할 수 있습니다.

![~@img/medialive-duplication/2018-09-0316.21.17.png](~@img/medialive-duplication/2018-09-0316.21.17.png)

6. 암호화, 접근 가능 IP, 비트레이트 등을 설정할 수 있습니다. 설정이 끝나면 좌측 상단의 Save를 클릭하여 설정을 마무리합니다.

![~@img/medialive-duplication/2018-09-0316.22.47.png](~@img/medialive-duplication/2018-09-0316.22.47.png)

7. 설정이 완료되면 위와 같이 URL이 생성됩니다.

![~@img/medialive-duplication/2018-09-0316.23.51.png](~@img/medialive-duplication/2018-09-0316.23.51.png)

- Show CloudFront URL 버튼을 누르면 CloudFront를 통해 Serving되는 주소를 볼 수 있습니다.

# MediaLive 설정

> MediaLive의 경우 테스트 계정에 있는 테스트 채널로 화면을 캡쳐하였습니다. 특정 값들이 실제와 다를 수 있습니다.

![~@img/medialive-duplication/2018-09-0316.26.41.png](~@img/medialive-duplication/2018-09-0316.26.41.png)

MediaLive → Channels

1. AWS Elemental MediaLive(이하 AEML)의 Channels에 접속합니다. 운용하고 있는 채널을 클릭하여 AEMP와 관련한 항목들을 수정하겠습니다. 그 전에 **AEML 채널의 상태가 Stopped 되어 있어야** 합니다. 서비스가 중단되오니 주의바랍니다.
2. Stop 시킨 채널을 클릭하여 Actions → Edit 을 클릭합니다.

![~@img/medialive-duplication/2018-09-0316.31.26.png](~@img/medialive-duplication/2018-09-0316.31.26.png)

AEML > Channels > Edit

3. 위와 같은 상세 화면에서 좌측에 Output groups를 클릭합니다.
   (본 문서에서는 _1. test-output_ 으로 되어있습니다. 실제 Output groups명은 다를 수 있습니다.)

![~@img/medialive-duplication/2018-09-0316.34.08.png](~@img/medialive-duplication/2018-09-0316.34.08.png)

AEML → Edit → Output groups

4. Output groups를 클릭하면 우측에 HLS group destination A와 HLS group destination B를 설정할 수 있는 패널이 출력됩니다. **AEMP에서 생성한 Channel Inputs의 정보를 HLS group destination A, B에 각각 기입**합니다.

![~@img/medialive-duplication/2018-09-0316.44.32.png](~@img/medialive-duplication/2018-09-0316.44.32.png)

- URL에 해당 값을 기입합니다.
- Username에 해당 값을 기입합니다.
- Name에 적당한 값을 넣습니다.
  (본 문서에서는 test로 기입하였습니다. 실제 값은 다르게 지정할 수 있습니다.)
- Password에 해당 값을 기입합니다.

![~@img/medialive-duplication/2018-09-0317.25.03.png](~@img/medialive-duplication/2018-09-0317.25.03.png)

AEML → Edit → Output groups → HLS Settings

5. CDN Settings에 값을 지정합니다. **Input Loss Action의 경우 반드시 PAUSE_OUTPUT으로 지정**합니다. 입력이 끊어졌을 때 다른 채널로 절체됩니다.

![~@img/medialive-duplication/2018-09-0317.27.28.png](~@img/medialive-duplication/2018-09-0317.27.28.png)

6. HLS outputs 외 기타 설정 값들을 지정해줍니다. (본 문서에서는 테스트용으로 Output을 하나만 지정해두었습니다. 실제 값과 다를 수 있습니다.)

7. 모든 설정이 마무리 되면 좌측 상단에 Update channel을 눌러 설정을 적용 시킵니다.

![~@img/medialive-duplication/2018-09-0317.29.47.png](~@img/medialive-duplication/2018-09-0317.29.47.png)

AEML → Channels → Destinations

8. Destinations 탭의 Destination A와 B가, 위에서 설정한 AEMP의 Inputs URL로 바뀌어있는지 확인합니다.

_본 방법을 통해서는 MediaLive의 Pipeline 송출 중단만이 절체 이벤트를 발동시킬 수 있습니다. 의도적으로 Pipeline B를 A로, 혹은 A를 B로 절체하는 Input Switching 방법은 AEML 서비스를 통해 지원됩니다._

이로써 MediaLive의 Pipeline Failover 발생 시 MediaPackage를 통해 절체하는 방법을 마무리합니다.
