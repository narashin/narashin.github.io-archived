(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{518:function(t,a,v){"use strict";v.r(a);var _=v(25),r=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"web"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#web"}},[t._v("#")]),t._v(" WEB")]),t._v(" "),v("h2",{attrs:{id:"was-란"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#was-란"}},[t._v("#")]),t._v(" WAS 란?")]),t._v(" "),v("p",[t._v("Web Application Server의 줄임말로, 클라이언트로부터 요청을 받으면 애플리케이션에 대한 로직을 실행하여 웹서버로 다시 반환해주는 소프트웨어이다.\n웹 서버와 DB 사이에 동작하는 미들웨어이다.")]),t._v(" "),v("h3",{attrs:{id:"web-서버와-was의-차이점"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#web-서버와-was의-차이점"}},[t._v("#")]),t._v(" WEB 서버와 WAS의 차이점")]),t._v(" "),v("p",[t._v("웹 서버의 경우 정적 컨텐츠를 요청받아 처리하지만, WAS의 경우 동적 컨텐츠(JSP, ASP, PHP등)를 요청받아 처리한다.")]),t._v(" "),v("h2",{attrs:{id:"폴링"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#폴링"}},[t._v("#")]),t._v(" 폴링")]),t._v(" "),v("p",[t._v("리얼타임 웹을 위한 기법으로 일정 주기를 가지고 서버와 응답을 주고받는 방식이 폴링\n(예를 들어 실시간으로 변하는 데이터가 있다면, 브라우저에서 5초 단위로 서버에 요청을 보내 업데이트 하는 방식)")]),t._v(" "),v("ul",[v("li",[t._v("정보가 변하지 않으면 리소스를 낭비하고 오버헤드/트래픽이 발생한다.")]),t._v(" "),v("li",[t._v("Ajax polling이라고도 부름(Ajax호출을 해서)")]),t._v(" "),v("li",[t._v("주기가 짧으면 서버 성능에 부담이 가고, 주기가 길면 실시간 성능이 떨어지는 문제점.")])]),t._v(" "),v("h3",{attrs:{id:"롱-폴링"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#롱-폴링"}},[t._v("#")]),t._v(" 롱 폴링")]),t._v(" "),v("p",[t._v("서버측에서 접속을 열어두는 시간을 길게하는 방식. 이벤트가 발생하면(변경된 데이터가 있을 때만 응답) 바로 응답이 이루어지기 때문에 실시간성이 아주 높으며, 스트리밍 방식과 달리 웹 브라우저 환경에 관계없이 사용할 수 있기 때문에 흔히 사용하는 방식")]),t._v(" "),v("h2",{attrs:{id:"웹소켓"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#웹소켓"}},[t._v("#")]),t._v(" 웹소켓")]),t._v(" "),v("p",[t._v("TCP 연결에 완전한 이중 통신 채널을 제공하는 컴퓨터 통신 프로토콜. HTTP 프로토콜과 호환되며, 호환성을 달성하기 위해 웹소켓 핸드쉐이크는 HTTP Upgrade Header를 사용하여 HTTP 프로토콜 내의 웹소켓 프로토콜로 변경된다.")]),t._v(" "),v("h2",{attrs:{id:"캐시"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#캐시"}},[t._v("#")]),t._v(" 캐시")]),t._v(" "),v("p",[t._v("웹 페이지 요소를 저장하기 위한 임시 저장소. 특히, 후에 필요할 것 같은 요소들을 저장한다. (그림파일이나 문서파일 등)\n웹 페이지가 빠르게 렌더링 할 수 있도록 도와준다.")]),t._v(" "),v("h3",{attrs:{id:"쿠키"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#쿠키"}},[t._v("#")]),t._v(" 쿠키")]),t._v(" "),v("p",[t._v("기본적으로 웹서버에서 PC로 보내는 작은 파일들을 저장한다. (사용자 인증 - 로그인정보, 방문기록, 방문횟수 등)"),v("br"),t._v("\n만료 시간이 있어 시간이 지나면 자동삭제 된다.")]),t._v(" "),v("h3",{attrs:{id:"redis를-이용한-캐시"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis를-이용한-캐시"}},[t._v("#")]),t._v(" Redis를 이용한 캐시")]),t._v(" "),v("p",[t._v("Redis는 Key-Value 형태의 데이터를 사용하는 In-Memory Cache이다."),v("br"),t._v("\n메모리 상에 직접 캐싱하거나 디스크에 캐싱할 수 있음. 대체로 대용량 API를 저장해야 하는 경우 높은 효율을 볼 수 있다.")]),t._v(" "),v("ul",[v("li",[t._v("다양한 자료구조 : String, Set, Sorted Set, Hash List 등")]),t._v(" "),v("li",[t._v("JSON도 지원")]),t._v(" "),v("li",[t._v("메모리와 디스크도 함께 사용, 데이터 복구시 유용")]),t._v(" "),v("li",[t._v("싱글 스레드")]),t._v(" "),v("li",[t._v("Copy-on-Write 방식을 사용하기 때문에 실제 사용하는 메모리보다 더 많은 메모리를 요구\n"),v("ul",[v("li",[t._v("리눅스에서 자식 프로세스 생성에 대해 메모리 공간을 공유한다. 하지만 부모 프로세스가 데이터를 넣거나, 수정하거나, 지우게 되면 메모리 공간을 공유할 수 없게 된다. 이때 부모 프로세스는 해당 페이지를 복사한 다음에 수정한다. 그래서 실제 사용 메모리보다, 임시로 데이터를 복사하고 수정하기 위해 더 많은 메모리 영역을 필요로 함.")]),t._v(" "),v("li",[t._v("(Copy-on-Write가 언제 발생하는지 알아봐야지.)")])])]),t._v(" "),v("li",[t._v("다양한 Eviction 정책을 통해 세밀한 Eviction 제어가 가능하다.\n는데, Eviction이 뭔지 알아봐야할듯.")])]),t._v(" "),v("h3",{attrs:{id:"memcached"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#memcached"}},[t._v("#")]),t._v(" Memcached")]),t._v(" "),v("p",[t._v("Memcached는 Key-Value 형태의 데이터를 사용하는 In-Memory Cache이다."),v("br"),t._v("\n(그럼 Redis랑 뭐가 다르지?)")]),t._v(" "),v("ul",[v("li",[t._v("멀티스레드 아키텍처 지원")]),t._v(" "),v("li",[t._v("멀티스레드를 지원하기 때문에 Scale up에 유리하다고 함. (왜?)")]),t._v(" "),v("li",[t._v("정적인 데이터 저장에 유리")])]),t._v(" "),v("h3",{attrs:{id:"cdn-캐시"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cdn-캐시"}},[t._v("#")]),t._v(" CDN 캐시")]),t._v(" "),v("p",[t._v("여러곳의 IDC 또는 ISP에 동일한 컨텐츠를 저장해놓고, 사용자 위치에 따라 가장 가까운 곳에서 컨텐츠를 제공한다. 웹 서버 앞에 위치하여, 정적컨텐츠 때로는 동적 컨텐츠까지도 캐싱하여 사용자로 하여금 빠른 응답시간과 트래픽 분산에 따른 서버부하 경감 효과를 얻을 수 있다.")]),t._v(" "),v("h2",{attrs:{id:"로그인을-하는-방식"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#로그인을-하는-방식"}},[t._v("#")]),t._v(" 로그인을 하는 방식")]),t._v(" "),v("h3",{attrs:{id:"세션"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#세션"}},[t._v("#")]),t._v(" 세션")]),t._v(" "),v("p",[t._v("쿠키를 기반으로 하지만 클라이언트에 저장하는 쿠키와는 다르게 서버에 저장하여 관리한다. 서버에서는 클라이언트를 구별하기 위해 각각의 세션ID를 클라이언트마다 부여하게 되며 클라이언트가 종료되기 전까지 유지한다. 보안성이 쿠키보다 더 높다.")]),t._v(" "),v("ul",[v("li",[t._v("동작방식")])]),t._v(" "),v("ol",[v("li",[t._v("클라이언트가 로그인 요청")]),t._v(" "),v("li",[t._v("서버에서는 클라이언트에게 고유한 세션ID를 부여하고, 세션 저장소에 저장한 후 클라이언트에게 발급")]),t._v(" "),v("li",[t._v("클라이언트는 서버에서 발급받은 세션ID를 쿠키에 저장하게 되고 요청을 보낼 때마다 쿠키를 보낸다")]),t._v(" "),v("li",[t._v("서버는 쿠키에 담겨있는 세션ID와 세션 저장소에 있는 정보와 대조한 후 데이터를 가져온다")])]),t._v(" "),v("h3",{attrs:{id:"쿠키-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#쿠키-2"}},[t._v("#")]),t._v(" 쿠키")]),t._v(" "),v("p",[t._v("클라이언트에 저장되는 key-value로 이루어진 데이터. 만료시간을 설정할 수 있고 만료시간이 정해진다면 클라이언트가 종료되어도 쿠키가 유지됨."),v("br"),t._v("\n쿠키가 저장되면 다음 요청은 쿠키에 담긴 정보를 이용해 참조한다.")]),t._v(" "),v("ul",[v("li",[t._v("동작방식")])]),t._v(" "),v("ol",[v("li",[t._v("클라이언트가 로그인 요청")]),t._v(" "),v("li",[t._v("서버에서 쿠키 생성 후 클라이언트로 전달")]),t._v(" "),v("li",[t._v("클라이언트가 서버로 요청을 보낼 때 쿠키를 전송")]),t._v(" "),v("li",[t._v("쿠키를 이용해 유저 인증을 진행")])]),t._v(" "),v("h3",{attrs:{id:"jwt-토큰"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#jwt-토큰"}},[t._v("#")]),t._v(" jwt 토큰")]),t._v(" "),v("p",[t._v("인증에 필요한 정보들을 암호화 시킨 토큰을 일컫는다. 세션 방식처럼 토큰 자체를 쿠키에 담아서 보낼수 있고, HTTP 헤더에 담아서 보내줄수도 있음.\n토큰은 3가지 요소로 구성되어 있다. (Header, Payload, Verify Signature)\nHeader와 Payload는 누구나 디코딩하여 내용을 확인할 수 있으니 민감정보는 넣지 않도록 해야한다. Secret Key를 알지못하면 Verify Signature는 복호화가 불가하다.")]),t._v(" "),v("ul",[v("li",[t._v("동작방식")])]),t._v(" "),v("ol",[v("li",[t._v("클라이언트가 로그인 요청")]),t._v(" "),v("li",[t._v("서버에서 유저의 고유한 ID와 다른 인증 정보들과 함께 payload에 담는다.")]),t._v(" "),v("li",[t._v("JWT 유효기간 설정 및 옵션 설정")]),t._v(" "),v("li",[t._v("Secret Key를 이용해 토큰 발급")]),t._v(" "),v("li",[t._v("발급된 토큰은 클라이언트의 쿠키 혹은 로컬스토리지 등에 저장하여 요청을 보낼때마다 같이 보낸다.")]),t._v(" "),v("li",[t._v("서버는 토큰을 Secret Key로 복호화하여 검증하는 과정을 거친다.")]),t._v(" "),v("li",[t._v("검증이 완료되면 대응하는 데이터를 보내준다.")])]),t._v(" "),v("h2",{attrs:{id:"js를-배포할-때-랜덤-스트링을-붙이는-이유"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#js를-배포할-때-랜덤-스트링을-붙이는-이유"}},[t._v("#")]),t._v(" js를 배포할 때 랜덤 스트링을 붙이는 이유")]),t._v(" "),v("p",[t._v("버전관리 및 올바른 버전의 정적 리소스가 제공되고 있는지 확인하기 위해."),v("br"),t._v("\n트래픽이 많은 웹사이트에 서비스를 제공하는 경우 캐싱을 할텐데, 이때 동일한 파일 이름으로 캐시를 무효하는 것이 어려울 수 있기 때문이다."),v("br"),t._v("\n서버는 올바른 헤더를 전달할 수 있지만, 클라이언트는 이를 무시하고 여전히 캐시된 버전을 로드할 수 있으므로 이를 방지하기 위함.")]),t._v(" "),v("h2",{attrs:{id:"html-이란"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#html-이란"}},[t._v("#")]),t._v(" HTML 이란")]),t._v(" "),v("p",[t._v("웹 페이지를 위한 마크업 언어.\n화면에 보이고자 하는 모양과 구조를 문서로 만든 것으로 단순 텍스트로 구성되어 있다.")]),t._v(" "),v("h2",{attrs:{id:"dom-이란"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dom-이란"}},[t._v("#")]),t._v(" DOM 이란")]),t._v(" "),v("p",[t._v("문서 객체 모델(Document Object Model)이란 의미로 HTML, XML 문서의 프로그래밍 인터페이스이다.\nHTML 문서의 내용과 구조가 객체모델로 변화된 형태.")]),t._v(" "),v("h2",{attrs:{id:"js는-왜-prototyping-을-선택할-수-밖에-없었나"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#js는-왜-prototyping-을-선택할-수-밖에-없었나"}},[t._v("#")]),t._v(" js는 왜 prototyping 을 선택할 수 밖에 없었나")]),t._v(" "),v("h2",{attrs:{id:"브라우저가-html을-불러와서-렌더링-하는-방법-crp"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#브라우저가-html을-불러와서-렌더링-하는-방법-crp"}},[t._v("#")]),t._v(" 브라우저가 HTML을 불러와서 렌더링 하는 방법 CRP")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://media.vlpt.us/post-images/surim014/212f1a60-2cd6-11ea-8bff-7fa1b7360f0c/image.png",alt:""}})]),t._v(" "),v("ul",[v("li",[t._v("DOM 트리 구축")]),t._v(" "),v("li",[t._v("CSSOM 트리 구축")]),t._v(" "),v("li",[t._v("Javascript 실행")]),t._v(" "),v("li",[t._v("렌더 트리 구축\n"),v("ul",[v("li",[t._v("웹페이지에 표시될 HTML요소들과 이와 관련된 스타일 요소들로 구성. DOM(HTML 요소들의 구조화된 표현)과 CSSOM(요소들과 연관된 스타일 정보의 구조화된 표현) 모델이 필요하다.")])])]),t._v(" "),v("li",[t._v("레이아웃 생성")]),t._v(" "),v("li",[t._v("페인팅")])]),t._v(" "),v("p",[t._v("출처 "),v("a",{attrs:{href:"https://velog.io/@surim014/DOM%EC%9D%B4%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80",target:"_blank",rel:"noopener noreferrer"}},[t._v("DOM이란 무엇인가"),v("OutboundLink")],1)]),t._v(" "),v("h1",{attrs:{id:"api"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),v("h2",{attrs:{id:"rest-란"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#rest-란"}},[t._v("#")]),t._v(" rest 란?")]),t._v(" "),v("p",[t._v("Client와 Server사이의 통신 방식중 하나로, HTTP URI를 통해 자원을 명시하고 HTTP Method를 통해 해당 자원에 대한 CRUD 작업을 적용하는 것.")]),t._v(" "),v("h3",{attrs:{id:"장점"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#장점"}},[t._v("#")]),t._v(" 장점")]),t._v(" "),v("ul",[v("li",[t._v("HTTP 프로토콜 인프라를 그대로 사용하므로 별도 인프라 구축이 필요 없음")]),t._v(" "),v("li",[t._v("HTTP 표준 프로토콜을 따르는 모든 플랫폼에서 사용 가능")]),t._v(" "),v("li",[t._v("서버와 클라이언트의 역할을 명확하게 분리")])]),t._v(" "),v("h3",{attrs:{id:"단점"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#단점"}},[t._v("#")]),t._v(" 단점")]),t._v(" "),v("ul",[v("li",[t._v("표준이 없다")]),t._v(" "),v("li",[t._v("사용할 수 있는 메소드가 제한적이다")]),t._v(" "),v("li",[t._v("구형 브라우저가 아직 제대로 지원하지 못하는 부분이 존재한다\n"),v("ul",[v("li",[t._v("PUT, DELETE 사용 불가 (그래요?)")]),t._v(" "),v("li",[t._v("pushState를 지원하지 않는 점")])])])]),t._v(" "),v("h2",{attrs:{id:"rest-와-restful의-차이"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#rest-와-restful의-차이"}},[t._v("#")]),t._v(" REST 와 RESTful의 차이")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://gmlwjd9405.github.io/images/network/restful.png",alt:""}}),t._v("\nRESTful 은 일반적으로 REST라는 아키텍처를 구현하는 웹 서비스를 나타내기 위한 용어로서, REST API를 제공하는 웹 서비스를 RESTful이라고 표현한다."),v("br"),t._v("\nREST를 REST답게 쓰기 위한 방법으로, 누군가 공식적으로 발표한 것은 아니다. 일관적인 컨벤션을 통한 API의 이해도 및 호환성을 높이는 것이 목표.")]),t._v(" "),v("h3",{attrs:{id:"restful"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#restful"}},[t._v("#")]),t._v(" RESTful")]),t._v(" "),v("ul",[v("li",[t._v("HTTP 프로토콜 기반")]),t._v(" "),v("li",[t._v("리소스는 URI로 표현하며, 고유해야한다")]),t._v(" "),v("li",[t._v("URI는 단순하고 직관적인 구조여야 한다")]),t._v(" "),v("li",[t._v("처리 결과를 status code로 사용한다")]),t._v(" "),v("li",[t._v("리소스 상태는 HTTP Method를 활용해 구분한다 (CRUD)")]),t._v(" "),v("li",[t._v("xml 또는 json을 활용해서 데이터 전송")]),t._v(" "),v("li",[t._v("동사보다 복수 명사를 기준으로 사용한다")])]),t._v(" "),v("h2",{attrs:{id:"graphql"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#graphql"}},[t._v("#")]),t._v(" graphql?")]),t._v(" "),v("p",[t._v("페이스북에서 만든 쿼리 언어로, API를 위한 서버측 런타임. REST를 대체할 수 있다고 하네요."),v("br"),t._v("\n클라이언트는 필요한 데이터의 구조를 지정할 수 ㅇ ㅣㅆ으며, 서버는 정확히 동일한 구조로 데이터를 반환한다.")]),t._v(" "),v("h2",{attrs:{id:"로그인은-rest-할까-아닐까"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#로그인은-rest-할까-아닐까"}},[t._v("#")]),t._v(" 로그인은 rest 할까 아닐까?")]),t._v(" "),v("h2",{attrs:{id:"모든-상황에서-하위-호환성을-유지해야만-하는가"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#모든-상황에서-하위-호환성을-유지해야만-하는가"}},[t._v("#")]),t._v(" 모든 상황에서 하위 호환성을 유지해야만 하는가?")]),t._v(" "),v("h2",{attrs:{id:"swagger"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#swagger"}},[t._v("#")]),t._v(" swagger")]),t._v(" "),v("h2",{attrs:{id:"rpc"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#rpc"}},[t._v("#")]),t._v(" RPC")]),t._v(" "),v("ul",[v("li",[t._v("Remote Procedure Call의 줄임말")]),t._v(" "),v("li",[t._v("원격에 위치한 프로그램을 로컬에 있는 프로그램처럼 사용 가능")]),t._v(" "),v("li",[t._v("개발자는 network 통신과 관련된 작업은 신경쓰지 않아도 된다")]),t._v(" "),v("li",[t._v("실행 인자와 실행할 코드를 명확하게 해야한다")]),t._v(" "),v("li",[t._v("IDL을 사용해 서버의 호출 규약을 정의한다")])]),t._v(" "),v("p",[t._v("SOAP도 알아두면 좋을듯")]),t._v(" "),v("h1",{attrs:{id:"개발"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#개발"}},[t._v("#")]),t._v(" 개발")]),t._v(" "),v("h2",{attrs:{id:"멱등성이란"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#멱등성이란"}},[t._v("#")]),t._v(" 멱등성이란?")]),t._v(" "),v("h2",{attrs:{id:"암호화-종류"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#암호화-종류"}},[t._v("#")]),t._v(" 암호화 종류")]),t._v(" "),v("p",[t._v("대칭 비대칭")]),t._v(" "),v("h2",{attrs:{id:"side-effect-란"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#side-effect-란"}},[t._v("#")]),t._v(" side effect 란?")]),t._v(" "),v("p",[t._v("함수를 입력값에 대해 일정한 출력을 하는 것으로 가정할 때, 출력값에 영향을 미치지 않는 모든 작업들을 side effect 라고 부른다는 겁니다."),v("br"),t._v("\n덧셈을 하는 함수가 있다면, 해당 함수의 기록을 로깅을 한다거나 네트워크에 전송하는 경우를 Side Effect로 본다.")]),t._v(" "),v("h2",{attrs:{id:"oop"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#oop"}},[t._v("#")]),t._v(" oop?")]),t._v(" "),v("p",[t._v("객체지향 프로그래밍. 객체를 기준으로 코드를 나누어 구현하는 프로그래밍 기법. 객체들의 유기적인 관계를 통해 프로세스가 진행된다.")]),t._v(" "),v("ul",[v("li",[t._v("캡슐화 - 하나의 객체에 대해 그 객체가 특정한 목적을 위해 필요한 변수나 메소드를 하나로 묶는 것\n"),v("ul",[v("li",[t._v("정보 은닉 용이")])])]),t._v(" "),v("li",[t._v("추상화 - 객체들의 공통된 특징을 파악해 정의해 놓은 설계 기법")]),t._v(" "),v("li",[t._v("다형성 - 형태가 같은데 다른 기능을 하는 것. 메소드 이름을 낭비하지 않아도 된다.\n"),v("ul",[v("li",[t._v("오버라이딩 - 부모 클래스에서 상속받은 자식 클래스에서 부모 클래스에서 만들어진 메소드를 자식 클래스에서 다시 재정의해서 사용")]),t._v(" "),v("li",[t._v("오버로딩 - 같은 이름의 메소드를 사용하지만, 메소드마다 다른 용도로 사용되며 결과물도 다르게 구현")])])]),t._v(" "),v("li",[t._v("상속성, 재사용 - 기존 상위 클래스에 근거하여 새롭게 클래스와 행위를 정의할 수 있게 도와주는 개념. 코드의 중복 경감.")])]),t._v(" "),v("h2",{attrs:{id:"test-의-종류"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#test-의-종류"}},[t._v("#")]),t._v(" TEST 의 종류")]),t._v(" "),v("h3",{attrs:{id:"unit-test-코드-가장-작은단위-함수-테스트"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#unit-test-코드-가장-작은단위-함수-테스트"}},[t._v("#")]),t._v(" Unit Test : 코드 가장 작은단위(함수) 테스트")]),t._v(" "),v("ul",[v("li",[t._v("장점 : 자동화 가능, 원할 때마다 실행 가능, 속도 빠름(고효율성)")]),t._v(" "),v("li",[t._v("단점 : 테스트 하는 코드를 짜야하는데 그 구현이 복잡할 수 있음")])]),t._v(" "),v("h3",{attrs:{id:"integration-서버의-한부분만-테스트"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#integration-서버의-한부분만-테스트"}},[t._v("#")]),t._v(" Integration : 서버의 한부분만 테스트")]),t._v(" "),v("h3",{attrs:{id:"e2e-ui단에서-테스트-처음부터-끝까지"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#e2e-ui단에서-테스트-처음부터-끝까지"}},[t._v("#")]),t._v(" E2E : UI단에서 테스트. 처음부터 끝까지.")]),t._v(" "),v("ul",[v("li",[t._v("장점 : 직관적이고, 가장 확실하다")]),t._v(" "),v("li",[t._v("단점 : 비용, 시간이 많이 든다")])]),t._v(" "),v("h2",{attrs:{id:"solid-란"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#solid-란"}},[t._v("#")]),t._v(" SOLID 란?")]),t._v(" "),v("p",[t._v("객체 지향 설계의 다섯가지 원칙")]),t._v(" "),v("ul",[v("li",[t._v("단일 책임 원칙 (Single responsibility principle) : 한 클래스는 하나의 책임만 갖는다")]),t._v(" "),v("li",[t._v("개방-폐쇄 원칙 (Open/closed principle) : 소프트웨어 요소는 확장에는 열려 있으나 변경에는 닫혀 있어야 한다")]),t._v(" "),v("li",[t._v("리스코프 치환 원칙 (Liskov substitution principle) : 프로그램의 객체는 프로그램의 정확성을 깨뜨리지 않으면서 하위 타입의 인스턴스로 바꾸루 수 있어야 한다")]),t._v(" "),v("li",[t._v("인터페이스 분리 원칙 (Interface segregation principle) : 특정 클라이언트를 위한 인터페이스 여러개가 범용 인터페이스 하나보다 낫다")]),t._v(" "),v("li",[t._v("의존관계 역전 원칙 (Dependency inversion principle) : 프로그래머는 “추상화에 의존해야지, 구체화에 의존하면 안된다.” 의존성 주입은 이 원칙을 따르는 방법 중 하나다.")])]),t._v(" "),v("h2",{attrs:{id:"js-메모리-구조"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#js-메모리-구조"}},[t._v("#")]),t._v(" JS 메모리 구조")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://velog.io/@code-bebop/JS-%EB%A9%94%EB%AA%A8%EB%A6%AC-%EA%B5%AC%EC%A1%B0",target:"_blank",rel:"noopener noreferrer"}},[t._v("JS 메모리 구조"),v("OutboundLink")],1),t._v(" "),v("a",{attrs:{href:"https://ui.toast.com/weekly-pick/ko_20200228",target:"_blank",rel:"noopener noreferrer"}},[t._v("V8 엔진(자바스크립트, NodeJS, Deno, WebAssembly) 내부의 메모리 관리 시각화하기"),v("OutboundLink")],1),t._v(" "),v("img",{attrs:{src:"https://media.vlpt.us/images/code-bebop/post/ea66ba38-ddf7-40e2-932b-eb78965cb67c/%EB%A9%94%EB%AA%A8%EB%A6%AC%20%ED%9E%99%201.png",alt:""}})]),t._v(" "),v("ul",[v("li",[t._v("Code Area - 실행할 JS코드를 저장")]),t._v(" "),v("li",[t._v("Call Stack - 메소드와 함수프레임, 원시값, 객체 포인터들을 포함한 정적데이터를 저장한다. 메모리 영역이며 V8 프로세스마다 하나의 스택을 가진다. 변수들은 LIFO 형식으로 저장.")]),t._v(" "),v("li",[t._v("HEAP - 참조 타입들이 할당. 객체나 동적 데이터를 저장한다. 콜 스택과 달리, LIFO 정책을 따르지 않고 랜덤하게 저장된다. 메모리 누수를 방지하기 위해 JS엔진의 메모리 관리자가 항상 관리한다. (가비지 콜렉터)")])]),t._v(" "),v("h2",{attrs:{id:"가비지-컬렉터가-동작하는-방식"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#가비지-컬렉터가-동작하는-방식"}},[t._v("#")]),t._v(" 가비지 컬렉터가 동작하는 방식")]),t._v(" "),v("p",[t._v("가비지 콜렉터 는 애플리케이션이 할당allocate한 메모리 공간을 주기적으로 검사하여 더 이상 사용되지 않는 메모리를 해제release 하는 기능을 말한다. 더 이상 사용되지 않는 메모리란 간단히 말하자면 어떤 식별자도 참조하지 않는 메모리 공간을 의미한다. 자바스크립트는 가비지 콜렉터를 내장하고 있는 매니지드 언어로서 가비지 콜렉터를 통해 메모리 누수memory leak를 방지한다.")]),t._v(" "),v("h3",{attrs:{id:"마이너gc"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#마이너gc"}},[t._v("#")]),t._v(" 마이너GC")]),t._v(" "),v("h3",{attrs:{id:"메이저gc"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#메이저gc"}},[t._v("#")]),t._v(" 메이저GC")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://miro.medium.com/max/1080/0*5cyzEpak2KthNN0U.gif",alt:"majorgc"}})]),t._v(" "),v("ul",[v("li",[t._v("Mark-Sweep-Compact 알고리즘을 사용하여 처리\n"),v("ul",[v("li",[t._v("마킹 : 어떤 객체가 사용중인지 식별")]),t._v(" "),v("li",[t._v("스위핑 : 비활성 상태의 객체들의 메모리 주소를 기록")]),t._v(" "),v("li",[t._v("압축")])])])]),t._v(" "),v("h3",{attrs:{id:"메모리-라이프-사이클"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#메모리-라이프-사이클"}},[t._v("#")]),t._v(" 메모리 라이프 사이클")]),t._v(" "),v("ol",[v("li",[t._v("Allocate 할당")]),t._v(" "),v("li",[t._v("Use 사용")]),t._v(" "),v("li",[t._v("Release 해제")])]),t._v(" "),v("h2",{attrs:{id:"해쉬맵-충돌이-나는-이유와-해결-방법"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#해쉬맵-충돌이-나는-이유와-해결-방법"}},[t._v("#")]),t._v(" 해쉬맵 충돌이 나는 이유와 해결 방법")]),t._v(" "),v("h2",{attrs:{id:"아는-정적-분석이-있는가"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#아는-정적-분석이-있는가"}},[t._v("#")]),t._v(" 아는 정적 분석이 있는가?")]),t._v(" "),v("p",[t._v("ESLint")]),t._v(" "),v("h2",{attrs:{id:"테스트-코드-커버리지는-높을-수록-좋은가"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#테스트-코드-커버리지는-높을-수록-좋은가"}},[t._v("#")]),t._v(" 테스트 코드 커버리지는 높을 수록 좋은가?")]),t._v(" "),v("h2",{attrs:{id:"의존성이-높을-경우-장점과-낮을-경우-장점"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#의존성이-높을-경우-장점과-낮을-경우-장점"}},[t._v("#")]),t._v(" 의존성이 높을 경우 장점과 낮을 경우 장점")]),t._v(" "),v("h2",{attrs:{id:"도메인이란"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#도메인이란"}},[t._v("#")]),t._v(" 도메인이란?")]),t._v(" "),v("p",[t._v('응용프로그램이 적용되는 주제 영역. "응용 프로그램 논리가 회전하는 지식 및 활동 영역"\n예를 들어 특정 병원을 위한 프로그램을 만들 때, 병원이 도메인이 되는 격.')]),t._v(" "),v("h2",{attrs:{id:"monolithic"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#monolithic"}},[t._v("#")]),t._v(" Monolithic")]),t._v(" "),v("p",[t._v("하나의 서버에 다양한 기능이 위치해 있는 아키텍처. 하나의 공통된 DB를 바라보고 있다.\n레퍼런스가 다양하고, 인프라 구성 및 운용이 간편.\n그러나 서비스 간에 서로 의존성이 존재하기 때문에, 시스템 일부만 수정하더라도 전체 애플리케이션의 빌드, 테스트, 패키징 과정을 다 거쳐야한다.")]),t._v(" "),v("h2",{attrs:{id:"soa"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#soa"}},[t._v("#")]),t._v(" SOA")]),t._v(" "),v("p",[t._v("공통된 서비스를 ESB(Enterprise Service Bus)에 모아 사업 측면에서 공통 기능의 집합을 통해 서비스를 제공.\n서비스 단위로 모듈을 분리하여 결합도를 낮춘다."),v("br"),t._v("\n그러나 이 역시 하나의 DB를 사용. 의존성이 높다.")]),t._v(" "),v("h2",{attrs:{id:"msa"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#msa"}},[t._v("#")]),t._v(" MSA")]),t._v(" "),v("p",[t._v("SOA의 확장된 형태, 함께 작동하는 작은 규모의 서비스의 집함을 의미.")]),t._v(" "),v("ol",[v("li",[t._v("서비스들은 비지니스 단위로 나뉘어져야 한다.")]),t._v(" "),v("li",[t._v("서비스들은 최소한의 중앙집중식 구성")]),t._v(" "),v("li",[t._v("서비스들은 서로 다른 언어와 DB로 구성될 수 있다.")]),t._v(" "),v("li",[t._v("각각의 서비스들은 HTTP API를 통해 데이터를 주고 받는다.")])]),t._v(" "),v("p",[t._v("최소한의 의존성을 가지고 있기 때문에 새로운 모듈에 대한 추가가 자유로움.\n그러나, 여러 프로젝트로 나뉘어 해당 프로젝트끼리 통신을 해야하는 구조라 서버구조가 복잡해짐.")]),t._v(" "),v("h2",{attrs:{id:"mvc-패턴에-대한-설명"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mvc-패턴에-대한-설명"}},[t._v("#")]),t._v(" MVC 패턴에 대한 설명")]),t._v(" "),v("p",[t._v("Model, View, Controller\n각각 서로 맡은 바에 집중 가능. 효율성을 위해."),v("br"),t._v("\n유지보수성, 확장성, 유연성이 증가하고 중복코딩 문제도 줄어듦.")]),t._v(" "),v("ul",[v("li",[t._v("모델 : 애플리케이션의 정보, 데이터. 데이터베이스.\n"),v("ul",[v("li",[t._v("사용자가 편집하길 원하는 모든 데이터를 갖고 있어야 함")]),t._v(" "),v("li",[t._v("뷰나 컨트롤러에 대해 어떤 정보도 알지 말아야 함")]),t._v(" "),v("li",[t._v("변경이 일어나면, 변경 통지에 대한 처리방법을 구현해야만 함")])])]),t._v(" "),v("li",[t._v("뷰 : 인터페이스 요소\n"),v("ul",[v("li",[t._v("모델이 가지고 있는 정보를 따로 저장해선 안 됨")]),t._v(" "),v("li",[t._v("모델이나 컨트롤러와 같이 다른 구성요소들을 몰라야 함")]),t._v(" "),v("li",[t._v("변경이 일어나면, 변경 통지에 대한 처리방법을 구현해야만 함")])])]),t._v(" "),v("li",[t._v("컨트롤러 : 데이터와 인터페이스 요소를 잇는 다리역할. 이벤트 부분.\n"),v("ul",[v("li",[t._v("모델이나 뷰에 대해 알고 있고 그의 변경을 모니터링 해야한다.")])])])]),t._v(" "),v("h2",{attrs:{id:"아는-디자인-패턴에-대해-설명"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#아는-디자인-패턴에-대해-설명"}},[t._v("#")]),t._v(" 아는 디자인 패턴에 대해 설명")]),t._v(" "),v("ul",[v("li",[t._v("싱글톤 : 전역변수를 사용하지 않고 객체를 하나만 생성하도록 하며, 생성된 객체를 어디에서든지 참조할 수 있도록 하는 패턴")]),t._v(" "),v("li",[t._v("데코레이터 : 객체의 결합을 통해 기능을 동적으로 유연하게 확장할 수 있게 해주는 패턴")]),t._v(" "),v("li",[t._v("추상 팩토리 : 구체적은 클래스에 의존하지 않고 서로 연관되거나 의존적인 객체들의 조합을 만드는 인터페이스를 제공하는 패턴")])]),t._v(" "),v("h1",{attrs:{id:"배포"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#배포"}},[t._v("#")]),t._v(" 배포")]),t._v(" "),v("h2",{attrs:{id:"git"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" git")]),t._v(" "),v("ul",[v("li",[t._v("checkout")]),t._v(" "),v("li",[t._v("clone")]),t._v(" "),v("li",[t._v("add")]),t._v(" "),v("li",[t._v("commit")]),t._v(" "),v("li",[t._v("diff")]),t._v(" "),v("li",[t._v("push")]),t._v(" "),v("li",[t._v("pull")]),t._v(" "),v("li",[t._v("stash")])]),t._v(" "),v("h2",{attrs:{id:"ci-cd"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ci-cd"}},[t._v("#")]),t._v(" CI/CD")]),t._v(" "),v("ul",[v("li",[t._v("AWS CodePipeline을 통해 경험")])]),t._v(" "),v("h2",{attrs:{id:"python-vs-node-js"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#python-vs-node-js"}},[t._v("#")]),t._v(" Python vs. Node.js")]),t._v(" "),v("p",[t._v("Python은 프로그래밍 언어입니다. Node.js는 그렇지 않습니다. 여기서 언어는 JavaScript이고 Node.js는 JavaScript용 런타임 환경입니다.")]),t._v(" "),v("p",[t._v("Python과 Node.js의 주요 차이점은 Node.js로 작성할 때 프론트엔드와 백엔드 모두에 동일한 언어를 사용한다는 것입니다.")]),t._v(" "),v("h3",{attrs:{id:"트렌드-기술"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#트렌드-기술"}},[t._v("#")]),t._v(" 트렌드 기술")]),t._v(" "),v("p",[t._v("Python은 최신 기술 , 특히 기계 학습에 완벽하게 적합합니다 .")]),t._v(" "),v("p",[t._v("Python은 데이터 과학 세계의 주요 업체이며 ML을 지원하는 여러 시도 및 테스트를 거친 라이브러리를 제공 합니다.\nJavaScript보다 Python에 정통한 기계 학습 전문가 를 찾는 것이 더 쉽습니다 ."),v("br"),t._v("\n더 가볍고 더 작은 Python 버전인 MicroPython 은 더 적은 전력과 더 적은 리소스로 실행할 수 있으므로 IoT 장치에 완벽하게 적합합니다(JavaScript에는 Espurino 형식의 동등한 기능이 있지만 널리 사용되지는 않음).")])])}),[],!1,null,null,null);a.default=r.exports}}]);