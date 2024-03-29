---
title: 면접 준비 - HTTP
description: 면접 준비 - HTTP
sidebarDepth: 2
---

## 1. HTTP란?

WWW상에서 정보를 주고 받을 수 있는 프로토콜. 주로 TCP를 사용하며, 80번 포트를 사용한다.
HTTP는 클라이언트와 서버 사이에 이루어지는 요청/응답 프로토콜이다. 주로 HTML 문서를 주고 받는 데에 쓰인다. Stateless.

## 2. HTTPS란?

HTTPS는 HTTP의 보안이 강화된 버전. 소켓 통신에서 일반 텍스트를 이용하는 대신에, SSL이다 TLS 프로토콜을 통해 세션 데이터를 암호화 한다. 기본 TCP/IP 포트는 443.

## 3. HTTP1.1과 2.0의 차이

![1.1과2.0차이](https://miro.medium.com/max/1328/1*rf2AnDQyHfGO_ThYfb-hWA.png)

HTTP1.1은 연결당 하나의 요청과 응답을 처리하기 때문에 동시 전송 문제와 다수의 리소스를 처리하는 데에 속도, 성능 이슈가 있었음.

HTTP2.0은 한 커넥션에 여러개 메시지를 동시에 주고 받을 수 있으며, 요청 리소스간 의존 관계를 설정할 수 있고, HTML문서상 필요한 리로스를 클라이언트 요청 없이 보내줄 수 있으며, Header정보를 HPACK압축 방식을 이용하여 압축 전송 하여 성능과 속도가 크게 향상.

## 4. HTTP 응답 코드

1XX Infomational  
2XX Success  
3XX Redirection  
4XX Client Error  
5XX Server Error

## 5. Header

인증 Authorization  
캐싱 Age, Expires  
조건부 Etag, Last-Modified  
연결 관리 Connection, Keep-Alive  
컨텐츠 협상 Accept,  
쿠키 Cookie, Set-Cookie  
CORS Access-Control-Allow-Origin, Orgin, Access-Control-Request-Headers, Access-Control-Request-Method  
메시지 바디 정보 Content-Type  
프록시 Forwarded  
요청 컨텍스트 From, Host, Referer, User-Agent  
응답 컨텍스트 Allow, Server

## 4. CRUD에 대응되는 Method

GET, POST, PUT, DELETE

## 5. 멱등성을 가지는 Method

- 멱등성 : 여러번 연산해도 결과가 달라지지 않는 성질

GET, HEAD와 같이 서버측의 상태 정보를 변경하지 않는 메소드

## 6. Stateless와 Stateful

### Stateless

대표적인 Stateless 프로토콜로는 UDP와 HTTP가 있다.  
세션 상태에 관계 없이 단순히 데이터그램을 source에서 destination 쪽으로 전송한다.  
Client가 송신하려 했던 모든 데이터가 server쪽에 수신되었는지 확인하지 않는다. 따라서 server쪽은 Client와의 세션 정보를 전혀 저장하지 않는다.

- 세션 정보를 server에 저장하지 않음. 세션 상태에 무관한 응답
  - 따라서 스케일링에 용이하다

### Stateful

대표적인 Stateful 프로토콜로는 TCP가 있다.  
TCP의 3way handshaking과정을 생각해보면, Server와 Client는 3way handshaking 과정에서 SYN과 SYN/ACK을 주고 받으며 양단간 세션 상태를 정해진 '상태'로 만든다.  
세션 상태가 정해지면 client와 server는 데이터를 주고 받을 수 있다.  
TCP는 세션 상태에 따라 server 응답이 달라지는 stateful 프로토콜이다.

- 세션 정보를 server에 저장, 세션 상태에 따른 응답 을 만족하도록 설계된 서비스 구조

## 7. Session과 Cookie

HTTP 프로토콜의 특징이자 약점을 보완하기 위해 사용된다.

1. Connectionless 프로토콜
   클라이언트가 서버에 요청을 했을 때, 그 요청에 맞는 응답을 보낸 후 연결을 끊는 처리 방식
   (단, HTTP 1.1 에서 `keep-alive` 값으로 연결을 유지하고 재활용 하는 기능이 추가 됨)
2. Stateless 프로토콜
   클라이언트의 상태 정보를 가지지 않는 서버 처리 방식. 클라이언트와 첫번째 통신에서 데이터를 주고 받았다고 해도, 두번째 통신에서 이전 데이터를 유지 하지 않는다.

그러나 실제로는 데이터 유지가 필요한 경우가 많아서, 둘다 웹 통신간 유지하려는 정보(로그인 정보 등)를 저장하기 위해 사용 된다.

### Session

일정 시간 동안 같은 사용자(브라우저)로부터 들어오는 일련의 요구를 하나의 상태로 보고, 그 상태를 일정하게 유지시키는 기술이다. (일정 시간이란, 웹 서버에 접속한 시점부터 웹 브라우저를 종료하여 연결을 끝내는 시점을 의미) 예를 들어 화면을 이동해도 로그인이 풀리지 않고 로그아웃전까지 유지

- 웹 서버에 웹 컨테이너의 상태를 유지하기 위한 정보를 저장한다.
- 브라우저를 닫거나, 서버에서 세션을 삭제했을 때만 삭제가 되므로, 쿠키보다 비교적 보안이 좋다
- 저장 데이터에 제한이 없다. (서버가 허락하는 한)
- 각 클라이언트 고유의 Session ID를 부여한다.

#### Session의 동작순서

1. 클라이언트가 페이지를 요청
2. 서버는 접근한 클라이언트의 Request-Header 필드인 Cookie를 확인하여, 클라이언트가 해당 session id를 보냈는지 확인
3. session id가 존재하지 않는다면, 서버는 session id를 생성해 클라이언트에게 반환
4. 서버에서 클라이언트로 돌려준 session id를 쿠키를 사용해 서버에 저장
5. 클라이언트는 재접속시, 이 쿠키를 이용하여 session-id 값을 서버에 전달

### Cookie

사용자가 어떠한 웹 사이트를 방문할 경우, 그 사이트가 사용하고 있는 서버에서 사용자의 컴퓨터에 저장하는 작은 기록 정보 파일.  
HTTP에서 클라이언트의 상태 정보를 클라이언트 PC에 저장하였다가 필요시 정보를 참조하거나 재사용 가능.

- 이름, 값, 만료일(저장 기간), 경로 정보로 구성
- 클라이언트에 총 300개의 쿠키 저장 가능
- 하나의 도메인당 20개의 쿠키를 가질 수 있음
- 하나의 쿠키는 4KB까지 저장 가능 하다

#### Cookie의 동작순서

1. 클라이언트가 페이지를 요청
2. 웹 서버가 쿠키 생성
3. 생성한 쿠키에 정보에 담아 HTTP 화면을 돌려줄 때, 같이 클라이언트에 반환
4. 넘겨 받은 쿠키는 클라이언트가 로컬 PC에 저장하여 가지고 있다가, 다시 서버가 요청할 때 요청과 함께 쿠키를 전송
5. 동일 사이트 재방문시 클라이언트 PC에 해당 쿠키가 있는 경우, 요청 페이지와 함께 쿠키를 전송

## 8. Request/Response

### Request

HTTP Request는 서버에서 데이터를 처리하기 위한 또는 가져오기 위한 메시지이다.

1. Start Line

- HTTP Method
- Request Target
- HTTP Version

2. Header

- Key: value

3. Body

- 해당 요청의 실제 내용

### Response

1. Start Line

- HTTP Version
- Status Code
- Status Text

2. Headers

3. Body

## 9. Multipart란

MIME 타입 중 하나로서, 웹 클라이언트가 요청을 보낼 때, http 프로토콜의 바디 부분에 데이터를 여러부분으로 나눠서 보내는 것.

## 10. 로그인 프로세스

ID 평문, PW 비대칭 암호화 알고리즘을 써서 해싱처리. sha256.
form id, pw
http post -> content type x-form-encoded
서버는 id를 기준으로 db . 유니크키로
pw는 body로 받은 패스워
애플리케이션에서 해싱 암호화 = 암호 패싱 된거 확인
retry count
