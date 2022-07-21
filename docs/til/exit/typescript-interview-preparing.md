## 함수형 프로그래밍

함수형 설계 방식으로 작성한 코드는 객체지향 방식의 코드보다 간결하고 논리 정연합니다. 함수형 프로그래밍에서는 불변성이라는 원칙에 따라 값이 변하는 것을 최대한 배제하므로 프로그램 검증과 최적화, 그리고 동시에 여러 스레드에서 문제없이 동작하는 프로그램을 쉽게 작성할 수 있습니다. 또한, 함수를 하나의 값처럼 다룰 수 있어서 재사용이 수월하고, 값을 미리 계산하지 않고 꼭 필요할 때만 계산하므로 메모리 절약과 프로그램의 성능에도 긍정적인 영향을 줍니다.

아래와 같은 방식으로 함수형 프로그래밍을 타입스크립트로 구현가능

### 선언형 프로그래밍

### 함수조합

### 제네릭

### 모나드

## 자바스크립트에 타입 기능이 있으면 좋은 이유는 무엇일까요?

오늘날 소프트웨어는 상당히 복잡하므로 보통 여러 사람이나 팀이 협력해 하나의 제품을 개발합니다. 그런데 이런 상황에서는 항상 코드를 작성한 쪽과 사용하는 쪽 사이에 커뮤니케이션이 중요합니다.

타입스크립트 컴파일러는 다음 화면처럼 문제의 원인이 어디에 있는지 친절하게 알려주므로 코드를 좀 더 수월하게 작성할 수 있습니다.

### 트랜스파일

ESNext 자바스크립트 소스코드는 바벨이라는 트랜스파일러를 거치면 ES5 자바스크립트 코드로 변환된다. TSC(Typescript compiler)라는 트랜스파일러를 통해 ES5 자바스크립트 코드로 변환된다.

어떤프로그래밍 언어로 작성된 소스코드를 또다른 프로그래밍 언어로 된 소스코드로 바꿔주는 트랜스파일러, 텍스트로 된 소스코드를 바이너리 코드로 바꿔주는 컴파일러와 구분

## 타입스크립트의 고유 문법

### 1. 타입 주석과 타입 추론

```js
let n: number = 2;
let m: 3;
```

콜론 : 타입으로 선언하는 것을 타입 주석이라고 함.

### 2. 인터페이스

```js
interface Person{
  name: string
  age?: number
}

let person: Person = { name: "nara" }
```

### 3. 튜플

```js
let numberArray: number[] = [1, 2, 3]; // 배열
let tuple: [boolean, number, string] = [true, 1, 'Ok']; // 튜플
```

물리적으로는 배열과 같으나, 배열에 저장되는 아이템의 데이터 타입이 모두 같으면 배열, 다르면 튜플.

### 4. 제네릭 타입

다양한 타입을 한꺼번에 취급할 수 있게 해준다.

```js
class Container<T> {
constructor(public value: T) { }
}
let numberContainer: Container<number> = new Container<number>(1)
let stringContainer: Contaienr<string> = new Container<string>('Hello world')
```

### 5. 대수타입 Algebraic Data Type

다른 자료형의 값을 가지는 자료형을 의미. 대수 타입에는 크게 합집합 타입, 교집합 타입이 있다. 합집합 타입은 '|'기호를 교집합 타입은 '&'기호를 사용해 다음 코드처럼 여러 타입을 결합해서 만들 수 있다.

```js
type NumberOrString = number | string; // 합집합 타입 예
type AnimalAndPerson = Animal & Person; // 교집합 타입 예
```

뭔말인지 모르겠음.

## tsconfig.json 파일 만들기

```bash
tsc --init
```

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "es5",
    "moduleResolution": "node",
    "outDir": "dist",
    "baseUrl": ".",
    "sourceMap": true,
    "downlevelIteration": true,
    "noImplicitAny": false,
    "paths": { "*": ["node_modules/*"] }
  },
  "include": ["src/**/*"]
}
```

### moduleResolution 키

module 키의 값이 commonjs이면 노드제이에스에서 동작하는 것을 의미하므로, moduleResolution
키값은 항상 node로 설정합니다. 반면에 module 키값이 amd이면 moduleResolution 키값은
classic으로 설정합니다.

### target 키

target 키에는 트랜스파일할 대상 자바스크립트의 버전을 설정합니다. 대부분 es5를 키값으
로 설정합니다. 만일, 최신 버전의 노드제이에스를 사용한다면 es6을 설정할 수 있습니다.

### baseUrl과 outDir 키

baseUrl과 outDir 키에는 트랜스파일된 ES5 자바스크립트 파일을 저장하는 디렉터리를 설
정합니다. tsc는 tsconfig.json 파일이 있는 디렉터리에서 실행됩니다. 따라서 현재 디렉터리
(current directory)를 의미하는 “.”로 baseUrl 키값을 설정하는 것이 보통입니다. OutDir 키는
baseDir 설정값을 기준으로 했을 때 하위 디렉터리의 이름입니다. 앞서 이 키는 dist라는 값
을 설정했으므로 빌드된 결과가 dist 디렉터리에 만들어집니다.

### paths 키

paths 키에는 소스 파일의 import 문에서 from 부분을 해석할 때 찾아야 하는 디렉터리를 설
정합니다. import 문이 찾아야 하는 소스가 외부 패키지이면 node_modules 디렉터리에서
찾아야 하므로 키값에 node_modules/\*도 포함했습니다.

### esModuleInterop 키

오픈소스 자바스크립트 라이브러리 중에는 웹 브라우저에서 동작한다는 가정으로 만들어
진 것이 있는데, 이들은 CommonJS 방식으로 동작하는 타입스크립트 코드에 혼란을 줄 수
있습니다. 02-2절에서 사용해 본 chance가 바로 AMD 방식을 전제로 해서 구현된 라이브
러리입니다. 따라서 chance 패키지가 동작하려면 esModuleInterop 키값을 반드시 true로
설정해야 합니다.

### sourceMap 키

sourceMap 키값이 true이면 트랜스파일 디렉터리에는 .js 파일 이외에도 .js.map 파일이 만들어집니다. 이 소스맵 파일은 변환된 자바스크립트 코드가 타입스크립트 코드의 어디에 해
당하는지를 알려줍니다. 소스맵 파일은 주로 디버깅할 때 사용됩니다.

## downlevelIteration 키

이 책의 06장에서는 생성기(generator)라는 타입스크립트 구문을 설명하는데, 이 생성기 구문
이 정상적으로 동작하려면 downlevelIteration 키값을 반
드시 true로 설정해야 합니다.

## noImplicitAny 키

타입스크립트 컴파일러는 기본적으로 f(a, b)처럼 매개변수 a, b에 타입을 명시하지 않은 코
드일 경우 f(a: any, b: any)처럼 암시적으로 any 타입을 설정한 것으로 간주합니다. 이런
형태의 코드는 타입스크립트 언어의 장점을 사용하는 것이 아니므로 다음처럼 코드에 문제
가 있음을 알려줍니다.

# export와 export default의 차이

# 변수 선언문

## 타입 주석

## 타입 추론

## any 타입

## undefined 타입

## 템플릿 문자열

# 객체와 인터페이스

object 타입은 인터페이스와 클래스의 상위 타입이다.

## 인터페이스 선언문

```js
interface 인터페이스이름 {
  속성이름: 속석타입;
}
```

```js
interface IPerson {
name: string
age: number
}
```

## 선택속성

어떤 속성은 있어도 되고 없어도 된다. 이 때 물음표 기호 붙여서 만든다.

```js
interface IPerson2 {
name: string // 필수 속성
age: number // 필수 속성
etc?: boolean // 선택 속성
}
let good1: IPerson2 = {name: 'Jack', age: 32}
let good2: IPerson2 = {name: 'Jack', age: 32, etc: true}
```

## 익명 인터페이스

```js
let ai: {
name: string
age: number
etc?: boolean
} = {name: 'Jack', age: 32}
```

주로 함수 구현할 때 씀

```js
function printMe(me: { name: string, age: number, etc?: boolean }) {
  console.log(
    me.etc ? `${me.name} ${me.age} ${me.etc}` : `${me.name} ${me.age}`
  );
}
printMe(ai);
```

# 객체와 클래스

## 클래스 선언문

## 접근 제한자 public, private, protect

## 생성자 contructor

## 인터페이스 구현 implements

```js
class 클래스 이름 implements 인터페이스 이름{

}
```

## 추상클래스 abstract

나를 상속하는 다른 클래스에서 이 속성이나 메소드를 구현하게 만든다.

```js
abstract class 클래스 이름 {
abstract 속성 이름: 속성 타입
abstract 메서드 이름() {}
}
```

new 연산자를 통해 객체를 만들 수 없음

```js
abstract class AbstractPerson5 {
abstract name: string
constructor(public age?: number) {}
}
```

## 클래스의 상속 extends

## static 속성

```js
class 클래스 이름 {
static 정적 속성 이름: 속성 타입
}
```

## 비구조화 할당

## 잔여 연산자 rest opertator

## 전개 연산자 spread operator

# 객체의 타입 변환

## 타입변환

## 타입단언

```js
(<타입>객체)
(객체 as 타입)
```

```js
import INameable from './INameable'
let obj: object = {name: 'Jack'}
let name1 = (<INameable>obj).name
let name2 = (obj as INameable).name
console.log(name1, name2) // Jack Jack
```

# 함수

## function

## Arraow function

## 매개 변수와 반환값의 타입 주석 생략 : 근데 하지마

## void 타입

```js
function printMe(name: string, age: number): void {
  console.log(`name: ${name}, age: ${age}`);
}
```

## 함수 시그니처

```js
let printMe: (string, number) => void = function(
  name: string,
  age: number
): void {};
```

## type 키워드로 타입 별칭 만들기

```js
type stringNumberFunc = (string, number) => void;
let f: stringNumberFunc = function(a: string, b: number): void {};
let g: stringNumberFunc = function(c: string, d: number): void {};
```

## undefined 관련 주의 사항

```js
interface INameable {
  name: string;
}
function getName(o: INameable) {
  return o.name;
}
let n = getName(undefined); // 오류 발생
console.log(n);
```

undefined는 최하위 타입이므로 INameable을 상속하는 자식 타입으로 간주합니다
undefined를 꼭 판별하는 코드를 작성해야함.

## 선택적 매개변수 : 매개변수 뒤에 물음표

## 함수는 객체다

자바스크립트는 함수형 언어 ‘스킴(scheme)’과 프로토타입(prototype) 기반 객체지향 언어
‘셀프(self)’를 모델로 만들어졌습니다

## 일등함수

함수와 변수를 구분하지 않는다.

## 제너레이터

## 단일 스레드로 동작하는 자바스크립트

스레드는 CPU가 프로그램을 동작시키는 최소 단위입니다. 운영체제에서 프로그램이 실행되고 있는 상태일 때를 프로세스라고 합니다. 프로세스는 한 개의 주 스레드와 여러 개의 작업 스레드를 동작시킵니다. 자바스크립트 코드는 항상 한 개의 작업 스레드에서 실행됩니다. 웹 브라우저나 노드 제이에스 프로그램 자체는 다중 스레드로 동작하지만, 자바스크립트 코드는 한 개의 작업 스레드, 즉 단일 스레드에서 동작합니다.

## 함수형 프로그래밍

순수 함수와 선언형 프로그래밍의 토대 위에 함수 조합과 모나드 조합으로 코드를 설계하고 구현하는 기법.

타입스크립트는 함수형 언어에서 중요하게 여겨지는 패턴 매칭과 고차 타입이라는 기능을 생략함으로써 구문을 쉽게 만들었습니다.

## 제네릭 함수

타입스크립트의 함수는 매개변수와 반환값에 타입이 존재하므로, 함수 조합을 구현 할 때는 제네릭 함수 구문을 사용해야만 합니다.

제네릭 타입으로 함수를 정의하면 어떤 타입에도 대응할 수 있다.
