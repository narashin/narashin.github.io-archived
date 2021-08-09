---
title: 특정 브라우저에서만 접속이 되지 않거나, 간헐적으로 되는 현상
description: 특정 브라우저에서만 접속이 되지 않거나, 간헐적으로 되는 현상
tags: ['HTTP2', 'PostMortem']
---

# 특정 브라우저에서만 접속이 되지 않거나, 간헐적으로 되는 현상

## 포스트모텀(Post-mortem)

특정 브라우저에서 서비스 도메인에 제대로 이용할 수 없다. 보통은 접속되지 않다가, 간헐적으로 접속되는 경우도 있다.

## 개요(Overview)

- 특정 브라우저에서 서비스 도메인으로 접속하였을 때, 브라우저가 에러로 표시된다.
- 모든 브라우저에서 동일한 문제가 발생하는 것은 아니다.
- 접속이 안되던 브라우저에서도 간헐적으로 되는 경우도 있다.

![~@img/apache-server-error/IMG_0342.png](~@img/apache-server-error/IMG_0342.png)

## 시간 분석(Timeline)

- `2019-02-13 19:00` : 고객사 WAF 설치 진행이 진행되는 와중에 구성을 변경하면서 상황을 인지함
  - 모바일 브라우저에서 동작을 확인한 결과 위와 같은 에러화면에 표시됨
- `19:10` : 모바일 브라우저에서 세부 내역을 확인할 수 없어서, **curl** 을 통해서 로그를 확인함

  ```bash
  $ curl 도메인 -v
  ```

  - → 확인 결과 HTTP/2 스트림이 비정상적으로 닫히는 현상을 발견

    ```
    * Using HTTP2, server supports multi-use
    * Connection state changed (HTTP/2 confirmed)
    * Copying HTTP/2 data in stream buffer to connection buffer after upgrade: len=0
    * Using Stream ID: 1 (easy handle 0x7fbc66806c00)
    > GET / HTTP/2
    > Host: 도메인
    > User-Agent: curl/7.54.0
    > Accept: */*
    >
    * Connection state changed (MAX_CONCURRENT_STREAMS updated)!
    * http2 error: Invalid HTTP header field was received: frame type: 1, stream: 1, name: [upgrade], value: [h2,h2c]
    * HTTP/2 stream 1 was not closed cleanly: PROTOCOL_ERROR (err 1)
    * Closing connection 0
    * TLSv1.2 (OUT), TLS alert, Client hello (1):
    curl: (92) HTTP/2 stream 1 was not closed cleanly: PROTOCOL_ERROR (err 1)
    ```

  - → 간헐적이긴 하지만 서비스 동작이 되는 경우도 있음

    ```
    * Using HTTP2, server supports multi-use
    * Connection state changed (HTTP/2 confirmed)
    * Copying HTTP/2 data in stream buffer to connection buffer after upgrade: len=0
    * Using Stream ID: 1 (easy handle 0x7fa646006c00)
    > GET / HTTP/2
    > Host: exraya.com
    > User-Agent: curl/7.54.0
    > Accept: */*
    >
    * Connection state changed (MAX_CONCURRENT_STREAMS updated)!
    < HTTP/2 200
    < date: Wed, 13 Feb 2019 08:11:58 GMT
    < content-type: text/html; charset=UTF-8
    < server: Apache/2.4.34 () OpenSSL/1.0.2k-fips
    < expires: Thu, 19 Nov 1981 08:52:00 GMT
    < cache-control: no-store, no-cache, must-revalidate
    < pragma: no-cache
    < set-cookie: PHPSESSID=n3om2gvcfpjrq36ure4u6ipcf9; path=/
    ```

  - 클라이언트 요청 시의 HTTP Protocol 버전을 `HTTP/1.1`로 강제하였을 시에는 이런 현상이 발견되지 않는다.

    ```
    $ curl https://도메인 --http1.1 -v
    *   Trying 54.169.150.245...
    * TCP_NODELAY set
    * Connected to 도메인 () port 443 (#0)
    * ALPN, offering http/1.1
    * Cipher selection: ALL:!EXPORT:!EXPORT40:!EXPORT56:!aNULL:!LOW:!RC4:@STRENGTH
    ```

    - 위의 `ALPN` 에서 클라이언트가 사용 가능한 프로토콜 버전을 `http/1.1` 로 한정해서 질의하도록 하였다.

- `2019-02-13 10:30` : 웹 서버에 접속하여 상태를 확인
- 이후 고객사 웹 서버의 설정 변경을 권고함

## 응급 조치(Immediate Action)

- `mod_http2` 등의 http2 설정을 웹 서버에서 비활성화함
- 애플리케이션은 HTTP/2 의 특성을 활용하도록 구성되어 있지 않음

## 근본 원인 분석(Root Cause Analysis)

- 특정 브라우저에서 HTTP/2 응답 표준에 맞지 않을 경우에 에러를 표시하고 있음
- 고객사의 웹 서버에서 HTTP/2 와 관련된 잘못된 설정을 하였음

## 5Why 분석(5Why Analysis)

---

- HTTP/2 동작에 대한 인식 부족
- -
- -
- -

## 논의(Discussion)

- 해당 내용을 바탕으로 수정 권고를 함

## 예방책(Preventative Measures)

- PHP + Apache를 사용하고 있는 고객들을 대상으로 환기해야 함

## 모니터링(Monitoring)

- -

## 참고
