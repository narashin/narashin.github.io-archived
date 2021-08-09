---
title: 입출력과 사칙연산
description: 입출력과 사칙연산과 관련한 백준 문제풀이
sidebar: auto
sidebarDepth: 2
---

[[toc]]

## 두 수 비교하기

[1330번 문제](https://www.acmicpc.net/problem/1330)  
두 정수 A와 B가 주어졌을 때, A와 B를 비교하는 프로그램을 작성하시오.

```
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = Number(input[0]);
var b = Number(input[1]);
if(a>b){
    console.log('>');
}else if(a<b){
    console.log('<');
}else{
    console.log('==');
}
```

## 시험 성적

[9498번 문제](https://www.acmicpc.net/problem/9498)  
시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.

```
var input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
var testResult = parseInt(input[0]);
if(testResult>= 90 && testResult <=100){
    console.log('A');
}else if(80<=testResult && testResult <90){
    console.log('B');
}else if(70<=testResult && testResult <80){
    console.log('C');
}else if(60<=testResult && testResult <70){
    console.log('D');
}else{
    console.log('F');
}
```

## 윤년

[2753번 문제](https://www.acmicpc.net/problem/2753)  
연도가 주어졌을 때, 윤년이면 1, 아니면 0을 출력하는 프로그램을 작성하시오.

윤년은 연도가 4의 배수이면서, 100의 배수가 아닐 때 또는 400의 배수일 때이다.

예를 들어, 2012년은 4의 배수이면서 100의 배수가 아니라서 윤년이다. 1900년은 100의 배수이고 400의 배수는 아니기 때문에 윤년이 아니다. 하지만, 2000년은 400의 배수이기 때문에 윤년이다.

```
var input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
var year = parseInt(input[0]);
if(year%4===0 && year%100!==0) {
    console.log('1');
}else if(year%400===0){
    console.log('1');
}else{
    console.log('0');
}
```

이 문제의 경우 `윤년은 연도가 4의 배수이면서, 100의 배수가 아닐 때 또는 400의 배수일 때이다.`라는 문장이 중의적으로 해석될 여지가 있는데, 쉼표를 붙이면 쉼표 뒤 문장은 수식하지 않는다는 규칙이 있기 때문에 `4의 배수이면서 100의 배수가 아닐 때, 또는 400의 배수일 때`로 문장을 수정하면 더 좋을 것 같다.

## 사분면 고르기

[14681번 문제](https://www.acmicpc.net/problem/14681)

흔한 수학 문제 중 하나는 주어진 점이 어느 사분면에 속하는지 알아내는 것이다. 사분면은 아래 그림처럼 1부터 4까지 번호를 갖는다. "Quadrant n"은 "제n사분면"이라는 뜻이다.

![14681](https://onlinejudgeimages.s3-ap-northeast-1.amazonaws.com/problem/14681/1.png)

예를 들어, 좌표가 (12, 5)인 점 A는 x좌표와 y좌표가 모두 양수이므로 제1사분면에 속한다. 점 B는 x좌표가 음수이고 y좌표가 양수이므로 제2사분면에 속한다.

점의 좌표를 입력받아 그 점이 어느 사분면에 속하는지 알아내는 프로그램을 작성하시오. 단, x좌표와 y좌표는 모두 양수나 음수라고 가정한다.

```
var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
var x = Number(input[0]);
var y = Number(input[1]);

if(x>0 && y >0){
    console.log('1');
}else if(x<0 && y>0){
    console.log('2');
}else if(x<0 && y<0){
    console.log('3');
}else if(x>0 && y<0){
    console.log('4');
}
```

위는 내가 처음 시도한 코드이다. fs 모듈을 사용하면 오류가 난다는 블로그 글이 있어서 `readline`으로 다시 시도해보았다.

```
var readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function(line){
    input.push(line);
  }).on('close', function(){
    let x = Number(input[0]);
    let y = Number(input[1]);

    if(x>0 && y >0){
      console.log('1');
    }else if(x<0 && y>0){
      console.log('2');
    }else if(x<0 && y<0){
      console.log('3');
    }else if(x>0 && y<0){
      console.log('4');
    }
    process.exit();
});

```
