---
title: 입출력과 사칙연산
description: 입출력과 사칙연산과 관련한 백준 문제풀이
sidebarDepth: 2
---

[[toc]]

## A+B

[1000번 문제](https://www.acmicpc.net/problem/1000)  
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

```js
var fs = require('fs');
var input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
```

`readFileSync('/dev/stdin/')` 로 표준입력 장치 값을 읽는다.

## A-B

[1001번 문제](https://www.acmicpc.net/problem/1001)  
두 정수 A와 B를 입력받은 다음, A-B를 출력하는 프로그램을 작성하시오.

## A\*B

[10998번 문제](https://www.acmicpc.net/problem/10998)  
두 정수 A와 B를 입력받은 다음, A×B를 출력하는 프로그램을 작성하시오.

## A/B

[1008번 문제](https://www.acmicpc.net/problem/1008)  
두 정수 A와 B를 입력받은 다음, A/B를 출력하는 프로그램을 작성하시오.

## 사칙연산

[10869번 문제](https://www.acmicpc.net/problem/10869)  
두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A\*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오.

A/B의 경우 몫만 구하는 문제이므로, parseInt()를 이용한다.

## 나머지

[10430번 문제](https://www.acmicpc.net/problem/10430)
(A+B)%C는 ((A%C) + (B%C))%C 와 같을까?  
(A×B)%C는 ((A%C) × (B%C))%C 와 같을까?  
세 수 A, B, C가 주어졌을 때, 위의 네 가지 값을 구하는 프로그램을 작성하시오.

## 곱셈

[2588번 문제](https://www.acmicpc.net/problem/2588)  
(세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.
![Q.2588](<https://www.acmicpc.net/upload/images/f5NhGHVLM4Ix74DtJrwfC97KepPl27s%20(1).png>)  
(1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오.

```js
var fs = require('fs');
var input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n');
var a = parseInt(input[0]);
var b = parseInt(input[1]);

console.log(a * (b % 10));
console.log(a * Math.floor((b % 100) / 10));
console.log(a * Math.floor(b / 100));
console.log(a * b);
```

Math.floor()를 이용하면, 주어진 수 이하의 가장 큰 정수를 구할 수 있다.
