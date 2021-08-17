---
title: 면접 준비 - Network
description: 면접 준비 - Network
sidebarDepth: 2
---

## what happens when type google.com into your browser address box and hit enter

![google.com](https://media-exp1.licdn.com/dms/image/C4E12AQFyNkIAI5dt-Q/article-cover_image-shrink_720_1280/0/1586676409805?e=1634169600&v=beta&t=K9dwyYRYB3Qmjt_DBLI8OeR5u0y5MiT3jhLsved2Pk0)

### 먼저 브라우저는 google.com 의 IP 주소를 찾기 위해 DNS 레코드 캐시를 확인한다.

DNS 레코드를 찾기 위해 브라우저는 4개의 캐시를 확인한다.

- 브라우저 캐시
- OS 캐시
- 라우터 캐시
- ISP 캐시

이 모든 단계가 실패하면 브라우저가 ISP로 이동한다.

### 요청한 URL이 캐시에 없으면 ISP는 DNS 서버는 google.com을 호스팅 하는 서버의 IP주소를 찾기 위해 DNS 쿼리를 시작한다.

DNS쿼리의 목적은 웹사이트에 대한 올바른 IP주소를 찾을 때까지 인터넷에서 여러 DNS서버를 검색하는 것이다. 필요한 IP 주소를 찾거나 찾을 수 없다는 오류 응답을 반환할 때까지 검색이 DNS 서버에서 DNS 서버로 반복적으로 재귀된다.

브라우저가 올바른 IP주소를 받으면 해당 IP주소와 일치하는 서버와 연결하여 정보를 전송한다.

### 브라우저가 서버와 TCP 연결을 시작한다.

HTTP 요청에 사용되는 가장 일반적인 프로토콜인 TCP 프로토콜로 연결된다.
클라이언트와 서버간 데이터 패킷을 전송하려면 TCP 연결을 설정하는 것이 중요하다. TCP/IP 3way handshaking 프로세스로 연결이 진행되는데, 이것은 클라이언트와 서버가 SYN(동기화) 및 ACK(승인) 메시지를 교환하여 연결을 설정하는 3단계 프로세스이다.

1. 클라이언트 시스템은 인터넷을 통해 서버에 SYN 패킷을 전송하여 새 연결을 위해 열려있는지 묻는다.
2. 서버에 새 연결을 수락하고 시작할 수 있는 열린 포트가 있는 경우 SYN/ACK 패킷을 사용하여 SYN 패킷의 ACK으로 응답한다.
3. 클라이언트는 서버로부터 SYN/ACK 패킷을 수신하고 ACK 패킷을 전송하여 승인한다.

그런 다음 데이터 전송을 위해 TCP 연결이 설정된다.

### 브라우저는 웹 서버에 HTTP 요청을 보낸다.

브라우저는 google.com 웹페이지를 요청하는 GET 요청을 보낸다. 이 요청에는 브라우저 식별을 위한 User-Agent 헤더, 수락할 요청 유형이 담긴 Accept헤더, 추가 요청에 대해 TCP 연결을 유지하도록 요청하는 연결 헤더와 같은 추가 정보도 포함 된다. 또한 브라우저가 이 도메인에 대해 저장한 쿠키에서 가져온 정보를 전달한다.

![request](https://miro.medium.com/max/700/0*SyxEqHOBZElX5laf.png)

### 서버는 요청을 처리하고 응답을 다시 보낸다.

서버에는 브라우저에서 요청을 수신하고 이를 요청 핸들러에 전달하여 응답을 읽고 생성하는 웹서버가 포함된다. 요청 처리기는 요청, 헤더 및 쿠키를 읽고 요청되는 내용을 확인하고 필요한 경우 서버의 정보를 업데이트 하는 프로그램이다. 그런 다음 특정 형식(JSON, XML, HTML)으로 응답을 조합한다.

### 서버가 HTTP 응답을 보낸다.

서버 응답에는 요청한 웹 페이지와 상태코드, 압축 유형(Content-Encoding), 페이지 캐시 방법(Cache-Control), 설정할 쿠키, 개인 정보 등의 정보가 포함 된다.

![response](https://miro.medium.com/max/700/0*ifRt45gihG_AwR3Z.png)

### 브라우저에 HTML 컨텐츠가 표시 된다.

브라우저는 HTML 컨텐츠를 단계적으로 표시한다. (정적 파일은 브라우저에 의해 캐시되므로 가져올 필요가 없음.)

## 3way Handshake

TCP 3way Handshake는 TCP/IP 프로토콜을 이용해서 통신을 하는 응용프로그램이 데이터를 전송하기 전에 먼저 정확한 전송을 보장하기 위해 상대방 컴퓨터와 사전에 세션을 수립하는 과정을 의미한다.

- 양쪽 모두 데이터를 전송할 준비가 되었다는 것을 보장하고, 실제로 데이터 전달이 시작하기 전에 한쪽이, 다른 한쪽이 준비 되었다는 것을 알 수 있도록한다.
- 양쪽 모두 상대편에 대한 초기 순차인련번호를 얻을 수 있도록 한다.

![3wayHandshake](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbNwPCT%2FbtqD0hCftBa%2F4fUpGdt1ddNBtk9RGmfKw0%2Fimg.png)

1. 클라이언트 SYN -> 서버 (Wait for client)
2. 클라이언트 (SYN_SENT) <- SYN/ACK 서버 (SYN_RECEIVED)
3. 클라이언트 SYN -> 서버 (ESTABLSHED)

## 4way Handshake

3way Handshake는 TCP 연결을 초기화 할 때 사용한다면, 4way Handshake는 세션을 종료하기 위해 수행되는 절차이다.

![4wayhandshake](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqUXSw%2FbtqDWsFNWJw%2FhVdKIneSYb7UK3wc0pj6Z0%2Fimg.png)

1. 클라이언트 (FIN_WAIT) FIN -> 서버
2. 클라이언트 <- ACK 서버 (CLOSE_WAIT)
3. 클라이언트 <- FIN 서버
4. 클라이언트 (TIME_WAIT) ACK -> 서버

서버에서 FIN을 전송하기 전에 전송한 패킷이 라우팅 지연이나 패킷 유실로 인한 재전송 등으로 인해 FIN패킷보다 늦게 도착하는 상황이 발생한다면, 클라이언트는 이러한 상황에 대비하여 일정시간(디폴트 240초)동안 세션을 남겨놓고 잉여 패킷을 기다린다. 이것이 TIME_WAIT.
일정 시간이 지나면 세션을 만료하고 연결을 종료시키며 CLOSE 상태로 변화한다.

![](https://t1.daumcdn.net/cfile/tistory/9910A8345BB0B75F2A)

## TLS Handshake

### 대칭키

정보의 송신자와 수신자가 서로 알고있어야하며, 송신자는 이 대칭키를 사용해 암호화를, 수신자는 대칭키르 사용해 복호화를 하게 된다.

#### 대칭키의 단점

정보의 송신자와 수신자만 이 공개키를 알고 있어야 하는데, 이 공개키를 통신으로 보낼 경우 노출되고, 공개키가 노출 되는 순간 안전하게 암호화 되었다고 볼 수 없다.

### 공개키

대칭키의 약점을 해결. Public key와 Private Key가 존재한다.
Private Key를 이용하여 복호화 해야하기 때문에 Public key만으로는 복호화 불가.
공개키와 짝을 이루는 비밀키를 사용한 사람만이 공개키를 통해 복호화할 수 있는 정보를 보낼 수 있기 때문에 A가 보낸 정보임을 보장할 수 있다.

### 인증서의 기능

1. 클라이언트가 접속한 서버가 신뢰할 수 있는 서버임을 보증
2. SSL 통신에 사용할 공개키 제공

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fpankv%2FbtqKGk67GtD%2Fg06Vm0pfdVgHgHmrx8UKk0%2Fimg.png)

1. Client Hello - 클라이언트가 서버에게 다음과 같은 정보를 전송한다

- 클라이언트에서 생성한 랜덤 값
- 클라이언트가 지원하는 암호화 방식
- 이전에 핸드쉐이크가 일어났을 경우, Session ID

2. Server Hello - 서버가 클라이언트에게 다음과 같은 정보를 전송한다

- 서버에서 생성한 랜덤 값
- 클라이언트가 제공한 암호화 방식 중 서버가 선택한 암호화 방식
- 인증서

3. Server Ceriticate - Server Hello Done
   클라이언트는 서버가 제공한 인증서가 CA에 의해 제공된 것인지 확인하기 위해, 브라우저가 가지고 있는 CA 리스트를 확인한다.
   만약에 리스트에 없다면 경고, 리스트에 있다면 해당하는 CA의 Public Key를 사용해 인증서가 복호화 되는지 확인한다.  
   이 과정에서 복호화가 정상적으로 진행된다면 서버는 해당 CA에 의해 인증 되었음을 뜻하고, 이 과정에서 서버의 Public Key를 얻는다.

4. Exchange pre-master Secret
   클라이언트는 1에서 생성한 랜덤값과 2에서 생성한 랜덤값을 조합하여 Pre-master Secret이라는 대칭키를 생성하게 된다. 또한 서버의 공개키를 사용하여 Pre-master Secret Key를 암호화 시키고 서버에 전송한다.

5. Master Secret, Session Key

서버는 Private Key를 통해 Pre-master Secret Key를 복호화해내고, 서버와 클라이언트 모두 일련의 과정을 거쳐 Master-Secret이라는 값을 얻어낸다. Master-Secret은 Session Key값을 생성하고, 생성된 Session-Key는 데이터 송수신 시에 대칭키 값으로 사용되고, 해당 세션이 만료되면 폐기된다.

## TCP / UDP

![tcp/udp](https://t1.daumcdn.net/cfile/tistory/99F6363359FDDC9E1F)

### TCP

인터넷상에서 데이터를 메시지의 형태로 보내기 위해 IP와 함께 사용하는 프로토콜

- 연결형 서비스로 가상 회선 방식을 제공한다.
- 3way handshaking과정을 통해 연결을 설정하고, 4way handshaking을 통해 해제한다.
- 높은 신뢰성을 보장한다.
- 흐름 제어 및 혼잡 제어
- 그렇기 때문에, UDP보다 느린 속도
- Full-duplex, Point to Point 방식

### UDP

데이터를 데이터그램 단위로 처리하는 프로토콜

- 비연결형 서비스로 데이터그램 방식을 제공한다.
- 정보를 주고 받을 때 정보를 보내거나 받는다는 신호절차를 거치지 않는다.
- UDP헤더의 CheckSUm 필드를 통해 최소한의 오류만 검출한다.
- 그렇기 때문에, 신뢰성이 낮다
- TCP보다 속도가 빠르다

## OSI 7계층

![osi7layer](https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F9907D5415C68F552036E2D)

ISO에서 지정한 컴퓨터 프토토콜 네트워킹에 대한 표준

1. Physical Layer(물리계층) - Signal
2. Data Link Layer(데이터 링크 계층) - Frame, MAC Address
3. Network Layer(네트워크 계층) - Packet, IP Address
4. Transport Layer(전송 계층) - Segment, TCP/UDP 프로토콜
5. Session Layer(세션 계층)
6. Presentation Layer(표현 계층) - Frame+Packet+Segment, MIME, 데이터 해석, 데이터 압축, 데이터 암복호화
7. Application Layer(응용 계층) - FTP, HTTP, SMTP, DNS, TELNET
