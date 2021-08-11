---
title: 면접 준비 - NodeJS
description: 면접 준비 - NodeJS
sidebarDepth: 2
---

# NodeJS 면접 준비

## 1. NodeJS란?

Chrome의 V8엔진을 이용하여 브라우저에서 JavaScript를 해석하듯이 서버에서 JavaScript를 동작할 수 있도록 하는 환경(플랫폼)

Node.js는 클라이언트 브라우저 외부에서 웹 애플리케이션을 실행하기 위한 오픈소스 크로스 플랫폼 Javascript 런타임 환경 및 라이브러리이다. 서버 측 웹 응용 프로그램을 만드는 데 사용된다.

Node.js는 비동기식 이벤트 기반 모델을 사용하므로 데이터 집약적인 애플리케이션에 적합하다. 실시간 웹 애플리케이션, 네트워크 애플리케이션, 범용 애플리케이션 및 분산 시스템 개발에도 사용할 수 있다.

## 2. Node.js를 사용하는 이유

Node.js를 사용하면 확장 가능한 네트워크 프로그램을 쉽게 구축할 수 있다.

- 빠르다
- 통합 프로그래밍 언어 및 데이터 유형을 제공한다
- 모든 것이 비동기적이다
- 뛰어난 동시성을 제공한다

## 3. Node.js의 작동원리

![img](https://www.simplilearn.com/ice9/free_resources_article_thumb/Node.js_Architecture_Workflow.png)

1. 클라이언트는 웹 애플리케이션과 상호작용 하기위해 웹 서버에 요청을 보낸다. 요청은 논블로킹 또는 블로킹일 수 있다.
2. 데이터를 쿼리한다.
3. 데이터를 업데이트 한다.
4. Node.js는 들어오는 요청을 검색하여 이벤트 대기열에 추가한다.
5. 그런 다음 요청은 이벤트 루프를 통해 하나씩 전달된다. 외부 리소스가 필요하지 않을 만큼 요청이 간단한지 확인한다.
6. 이벤트 루프는 I/O 폴링과 같은 간단한 요청(논블로킹 요청)을 처리하고 해당 클라이언트에 응답을 반환한다.

스레드 풀의 싱글 스레드가 싱글 컴플렉스 리퀘스트에 할당된다. 이 스레드는 데이터베이스, 파일 시스템 등과 같은 외부 리소스에 액세스하여 특정 블로킹 요청을 완료하는 역할을 한다.

작업이 완전히 수행되면 해당 응답을 클라이언트로 다시 보내는 이벤트 루프로 응답이 전송된다.

## 4. Node.js가 단일 스레드인 이유

Node.js는 비동기처리를 위한 싱글 스레드를 갖는다. 일반적인 웹 로드를 할 때 단일 스레드에서 비동기처리를 수행하면 일반적인 스레드 기반 구현 대신 더 많은 성능과 확장성을 얻을 수 있다.

## 5. Callback in Node.js

콜백함수는 주어진 작업 후에 호출 됩니다. 그동안 다른 코드를 실행할 수 있으며 블로킹을 방지한다. 비동기 플랫폼이기 때문에 Node.js는 콜백에 크게 의존한다. Node의 모든 API는 콜백을 지원하도록 작성되었습니다.

## 6. I/O

매체와 데이터를 주고 받는 모든 프로그램, 작업 또는 장치를 설명하는 데 사용된다. 모든 전송은 한 매체의 출력과 다른 매체의 입력이다.

## 7. Node.js는 어디서 가장 자주 사용되나

1. 실시간 채팅
2. 사물 인터넷
3. 복잡한 SPA
4. 실시간 협업 도구
5. 스트리밍 애플리케이션
6. 마이크로서비스 이케틱처

## 8. NPM

NPM은 Node.js의 모든 패키지와 모듈을 관리하는 Node Package Manager의 약자이다.

- node.js 패키지/모듈에 대한 온라인 리포지토리 제공
- Node.js 패키지를 설치하고 Node.js 버전 및 종속성을 관리하는 CLI를 제공

## 9. 모듈

Node.js 애필리케이션에서 함수 집합을 포함하는 데 사용할 수 있는 Javascript 라이브러리
`require()` 함수를 사용하여 사용할 수 있다.

HTTP, util, fs, URL, query string, stream, zlib

## 10. Node.js 장점과 단점

### 장점

빠른 처리 및 이벤트 기반 모델
Javascipt의 높은 접근성
NPM을 통해 50,000개 이상 패키지 사용 가능
대량의 데이터 스트리밍 및 I/O 집약적 작업에 적합

### 단점

무거운 계산 작업에 부적합
여러 중첩 콜백으로 끝나기 때문에 복잡도가 올라감
관계형 데이터베이스를 다루기에 부적합
단일 스레드이므로 CPU 집약적인 작업에 약함

## 11. 이벤트 기반 프로그래밍이란 Event-driven programming

이벤트 기반 프로그래밍 접근 방식은 이벤트를 사용하여 다양한 기능을 트리거 한다. 이벤트는 키 입력이나 마우스 버튼 클릭과 같은 모든 것이 될 수 있다. 콜백 함수는 이벤트가 트리거 될 때마다 실행되는 요소에 이미 등록되어 있다.

## 12. Node.js에서의 이벤트 루프

이벤트 루프는 Node.js에서 비동기 콜백을 처리한다. Node.js의 논블로킹 입/출력의 기반이 되며 가장 중요한 환경 기능 중 하나이다.

## 13. Node.js에서 EventEmitter는

- `EventEmitter`는 이벤트를 방출할 수 있는 모든 객체를 보유하는 클래스
- `EventEmitter` 클래스의 객체가 이벤트를 더질 때마다 연결된 모든 함수가 동기적으로 호출

## 14. Node.js의 두가지 API 함수 유형

- 비동기, 논블로킹
- 동기, 블로킹

## 15. package.json 파일

Node.js 시스템의 핵심. 본 파일에 특정 프로젝트에 대한 메타데이터가 들어있다. 모든 애플리케이션 또는 모듈의 루트 디렉터리에 존재.

## 16. Node.js에서 URL 모듈을 어떻게 사용할까

URL 모듈은 URL 확인 및 구문 분석을 위한 다양한 유틸리티를 제공한다. 웹 주소를 읽을 수 있는 형식으로 분할 하는 데 도움이 되는 내장 모듈.

## 17. Express.js 패키지란

Express는 웹 및 모바일 애플리케이션을 모두 개발할 수 있는 다양한 기능을 제공하는 유연한 Node.js 웹 애플리케이션 프레임워크이다.

## 18. Express.js 애플리케이션 만드는 법을 간단하게 설명하면

- request 객체는 HTTP 요청을 나타내며, 요청 쿼리 문자열, 매개변수, 본문, HTTP 헤더 등에 대한 속성이 있다.
- response 객체는 Express 앱이 HTTP 요청을 수신할 때 보내는 HTTP 응답을 나타낸다.

## 19. Node.js의 스트림

스트림은 데이터를 읽거나 지속적으로 쓸 수 있도록 하는 개체.
Readable, Writable, Duplex, Transform 의 네가지 유형이 존재.
각각 읽기 작업, 쓰기 작업, 읽기/쓰기 작업, 입력 기반으로 출력이 계산되는 이중 스트림 유형의 기능을 가진다.

## 20. Hello Wolrd를 반환하는 간단한 서버를 Node.js에 생성

```js
var http = require('http');
http.createServer(funtion(req, res){
  res.writeHead(200, { "Content-Type:'text/plain'"});
  res.end("Hello Wolrd");
}).listen(8080, "127.0.0.1");
```

- HTTP 모듈 가져오기
- req, res를 매개변수로 사용하는 콜백함수와 함께 `createServer` 함수를 사용
- Hello World 입력
- 포트 8080을 수신하도록 하고 IP주소 할당

## 21. Node.js 비동기 및 논블로킹 API 설명

- 모든 Node.js 라이브러리 API는 비동기식이므로 논블로킹이다.
- Node.js 기반 서버는 API가 데이터를 반환할 때까지 기다리지 않는다. 대신 호출 후 다음 API로 이동하고, Node.js 이벤트의 알림 매커니즘은 이전 API 호출에 대해 서버에 응답한다.

## 22. Node.js에서의 비동기 구현

async, await 이용

```js
async function foo(req, res) {
  let response = await request.get('http://localhost:3000');
  if (response.err) {
    console.log('error');
  } else {
    console.log('fetched response');
  }
}
```

### 23. module.exports의 목적

Node.js의 모듈은 모든 관련 코드를 단일 코드 단위로 캡슐화 하는 데 사용되며 모든 관련 기능을 단일 파일로 해석할 수 있다. module.exports를 사용하여 모듈을 내보낼 수 있다. 그러면 필수 키워드를 사용하여 다른 파일로 가져올 수 있다.

## 24. Node.js에서 콜백함수란

콜백은 주어진 작업 후에 호출되는 함수이다. 이렇게하면 블로킹이 방지되고 그동안 다른 코드가 실행될 수 있다.

## 25. REPL 이란

Read Eval Print Loop의 약자로 컴퓨터 환경을 나타낸다.

## 26. Control Flow Function 이란

## 27. Node.js에서 fork()와 spawn() 메소드의 차이

## 28. Node.js의 buffer 클래스

버퍼 클래스는 정수 배열과 유사한 raw 데이터를 저장하지만, V8 Heap 외부의 raw 메모리 할당에 해당한다. 순수 Javascript는 바이너리 데이터와 호환되지 않기 때문에 버퍼클래스가 사용된다.

## 29. Node.js 에서 파이핑이란?

파이핑은 한 스트림의 출력을 다른 스트림에 연결하는데 사용되는 매커니즘이다. 일반적으로 한 스트림에서 데이터를 검색하고 다른 스트림으로 출력을 전달하는 데 사용된다.

## 30. Node.js에서 파일을 열려면?

```js
fs.open(path, flags[, mode], callback)
```

## 31. 콜백지옥이란?

비동기 논리의 부적절한 구현으로 인해 콜백 지옥이 발생한다. 중첩되어 가독성이 떨어지며 관리하기 어렵다.  
그래서 `Promise`를 쓰게 됨

## 32. 테스트 피라미드란?

![test-pyramid](https://www.simplilearn.com/ice9/free_resources_article_thumb/test-pyramid.JPG)

## 33. Node.js에서의 미들웨어

미들웨어는 요청 및 응답 객체를 수신하는 기능이다. 기능은 대부분 아래와 같다.

- 모든 코드 실행
- 요청 및 응답 개체 업데이트 또는 수정
- 요청-응답 주기 완료
- 스택의 다음 미들웨어 호출

## 34. HTTP 요청 유형은 무엇인가?

GET : 데이터 검색에 사용  
POST : 일반적으로 서버의 상태 또는 반응을 변경하는 데 사용  
HEAD : 응답 본문 없이 응답 요청  
DELETE : 소정의 자원을 삭제할 때 사용

## 35. MongoDB 데이터베이스를 Node.js에 어떻게 연결?

1. MongoClient 객체 생성
2. 생성하려는 데이터베이스의 이름과 올바른 IP 주소로 연결 URL을 지정

```js
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb:localhost:3306/mydb';

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log('Database created!');
  db.close();
});
```

## 36. NODE_ENV의 목적

## 37. ES5와 ES6 차이

### `let`, `const` 키워드 추가

함수레벨 스코프를 따르던 `var` 키워드 외에 블록레벨 스코프를 따르는 `let`, `const` 키워드가 추가되었다.

- `let` : 재할당 가능
- `const` : 재할당 불가능

- 블록레벨 스코프 : 모든 코드 블록 내에서 선언된 변수는 코드 블록 내에서만 유효하고 코드 블록 외에서는 참조 불가
- 함수레벨 스코프 : 함수 내에서 선언된 변수는 함수 내에서만 유효하며 함수 외부에서는 참조 불가. 함수 내, 지역변수. 함수 밖, 전역 변수.

### Arrow function 추가

this, prototype, arguments 세가지가 없으며. 익명 함수로만 사용할 수 있다.

1. `this`  
   일반 함수는 호출할 때 어떻게 호출되는지에 따라 this에 바인딩 될 객체가 동적으로 결정되지만, 애로우 펑션은 **선언** 할 때 this에 바인딩될 객체가 정적으로 결정된다. 애로우 펑션의 this는 항상 상위 scope의 this를 의미한다. 자신만의 this를 새엇ㅇ하지 않는 익명함수이다.(Lexical this)

2. prototype
   생성자 함수로 사용할 수 없다. new 사용시 오류 발생.

3. arguments
   매개변수를 지정하지 않아도 arguments 프로퍼티가 함수에 자동으로 생성되어 사용 가능 했었으나, arguments가 없어졌다.(대신 args가 생김.)

4. 호이스팅(Hoisting) 될 수 없다
   코드에 선언된 변수 및 함수를 코드 상단으로 끌어 올리는 것.  
   (함수 내에서 선언한 함수 범위의 변수는 해당 함수 최상위로 호이스팅 됨. 하지만 애로우펑션은 불가.)

#### Arrow Function을 사용해선 안 되는 경우

1. 객체의 메소드에서 사용 시

```js
const person = {
  name: 'Nara',
  sayHello: () => console.log(`Hi ${this.name}`),
};

person.sayHello(); // Hi undefined
```

상위 scope의 this를 계승하기 때문에 이 경우 전역 객체를 가리키게 됨.

2. `addEventListener`의 콜백함수

### Default parameter 추가

인자가 없거나 `undefined` 인 경우에 들어갈 기본값을 설정해놓아야 한다
ES6에서는 기본 매개 변수를 제공하고, 매개 변수가 없을 경우 지정한 기본값을 인자로 전달한다.

```js
function sayHello(name = 'student', greeting = 'Hi') {
  return `${greeting} ${name}!`;
}
sayHello(); // Hi Student!
```

### Templete literal 추가

백틱으로 문자열과 값을 간단하게 사용 가능 오예!

#### multi-line string

그렇기 때문에 백틱으로 멀티라인 스트링도 쉽게 다룰 수 있게 됨

### Destructuring Assignment 비구조화 할당

배열이나 객체의 요소를 해체하여 별개의 변수로 추출할 수 있다.

```js
var { first, second } = $('body').data();

[a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(rest) = [3, 4, 5];
```

### 클래스

`new` 키워드로 Class 생성가능. `constructor()` 생성자 함수로 속성 설정 가능.  
메서드 정의, 상속, 부모 메서드 호출 가능한 Class를 사용할 수 있다.  
프로토 타입과 클래스가 다르지 않다. 즉, 프로토 타입으로 상속을 구현했을 경우 클래스 문법을 사용할 수 있다.

### 모듈

재사용하기 위한 코드 조각들을 의미.
`export`, `import`로 모듈을 내보내고 불러올 수 있다.

### Promise 프로미스

비동기를 위한 객체, 어떤 일의 진행 상태를 나타내는 객체로 상태와 값이라는 속성을 갖고 있다.
`resolve`, `reject` 를 호출하여 진행 상태를 결정할 수 있다. promise의 값은 `resolve`, `reject`를 호출할 때 넘긴 인자에 의해 결정된다.  
`then()`, `catch()` 는 일의 진행 상태를 나타내는 객체로, promise가 fullfilled일 때 `then()`에 등록된 함수를 실행하고 promise가 `rejected` 일 때 아무것도 하지 않는다.

## 38. Closure 클로저 함수

리턴된 함수에서 자신을 만들어준 함수 내의 변수에 접근하는 것.  
함수 안에서 새로운 함수를 만들어서 변환하는 경우에는 예외적으로 변수 접근을 허용한다.

클로저는 자바스크립트 고유의 개념이 아니라 함수를 일급 객체로 취급하는 함수형 프로그래밍 언어(Functional Programming language: 얼랭(Erlnag), 스칼라(Scala), 하스켈(Haskell), 리스프(Lisp)…)에서 사용되는 중요한 특성이다.

클로저는 반환된 내부함수가 자신이 선언됐을 때의 환경(Lexical environment)인 스코프를 기억하여 자신이 선언됐을 때의 환경(스코프) 밖에서 호출되어도 그 환경(스코프)에 접근할 수 있는 함수

```js
function add(a, b, callback){
  var result = a+b;
  callback(result);

  var historyCount = 0;
  var history = function(){
    historyCount++;
    return count+ ":" + a + "+" + b + "=" +result;
  };
  return history;
}

var history = add(10,20, function(result){
  console.log("더하기 결과" + result);
});

// 자신을 만들어준 함수 내의 변수에 접근하기
console.log("결과값": history());
console.log("결과값": history());
console.log("결과값": history());
```

- 상태 유지 : 클로저가 가장 유용하게 사용되는 상황은 현재 상태를 기억하고 변경된 최신 상태를 유지하는 것이다.
- 전역 변수의 사용 억제
- 정보의 은닉
- 내부함수가 참조하는 외부함수의 객체들을 더이상 사용하지 않아도 가비지 콜렉터가 수집하지 못하므로 메모리 누수에 조심해야한다.

## 39. Lexical scoping 렉시컬 스코핑

스코프는 함수를 호출할 때가 아니라 함수를 어디에 선언하였는지에 따라 결정된다. 이를 렉시컬 스코핑(Lexical scoping)라 한다. 위 예제의 함수 innerFunc는 함수 outerFunc의 내부에서 선언되었기 때문에 함수 innerFunc의 상위 스코프는 함수 outerFunc이다. 함수 innerFunc가 전역에 선언되었다면 함수 innerFunc의 상위 스코프는 전역 스코프가 된다.

## 40. 이벤트 루프

[로우 레벨로 살펴보는 Node.js 이벤트 루프](https://evan-moon.github.io/2019/08/01/nodejs-event-loop-workflow/)
