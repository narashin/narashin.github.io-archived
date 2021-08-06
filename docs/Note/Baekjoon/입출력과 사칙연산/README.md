---
title: 입출력과 사칙연산
description: 입출력과 사칙연산과 관련한 백준 문제풀이
sidebar: auto
---

[[toc]]

## A+B

[1000번 문제](https://www.acmicpc.net/problem/1000)  
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

```
var fs = require('fs');
var input = fs.readFileSync('/dev/std/').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);

console.log(a+b);
```

`readFileSync('/dev/std/')` 로 표준입력 장치 값을 읽는다.
