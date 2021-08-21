---
title: IF
description: if문과 관련한 백준 문제풀이
sidebarDepth: 2
---

[[toc]]

## 두 수 비교하기

[1330번 문제](https://www.acmicpc.net/problem/1330)  
두 정수 A와 B가 주어졌을 때, A와 B를 비교하는 프로그램을 작성하시오.

```js
var fs = require('fs');
var input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split(' ');
var a = Number(input[0]);
var b = Number(input[1]);
if (a > b) {
  console.log('>');
} else if (a < b) {
  console.log('<');
} else {
  console.log('==');
}
```

## 시험 성적

[9498번 문제](https://www.acmicpc.net/problem/9498)  
시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.

```js
var input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split(' ');
var testResult = parseInt(input[0]);
if (testResult >= 90 && testResult <= 100) {
  console.log('A');
} else if (80 <= testResult && testResult < 90) {
  console.log('B');
} else if (70 <= testResult && testResult < 80) {
  console.log('C');
} else if (60 <= testResult && testResult < 70) {
  console.log('D');
} else {
  console.log('F');
}
```

## 윤년

[2753번 문제](https://www.acmicpc.net/problem/2753)  
연도가 주어졌을 때, 윤년이면 1, 아니면 0을 출력하는 프로그램을 작성하시오.

윤년은 연도가 4의 배수이면서, 100의 배수가 아닐 때 또는 400의 배수일 때이다.

예를 들어, 2012년은 4의 배수이면서 100의 배수가 아니라서 윤년이다. 1900년은 100의 배수이고 400의 배수는 아니기 때문에 윤년이 아니다. 하지만, 2000년은 400의 배수이기 때문에 윤년이다.

```js
var input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split(' ');
var year = parseInt(input[0]);
if (year % 4 === 0 && year % 100 !== 0) {
  console.log('1');
} else if (year % 400 === 0) {
  console.log('1');
} else {
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

```js
var input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n');
var x = Number(input[0]);
var y = Number(input[1]);

if (x > 0 && y > 0) {
  console.log('1');
} else if (x < 0 && y > 0) {
  console.log('2');
} else if (x < 0 && y < 0) {
  console.log('3');
} else if (x > 0 && y < 0) {
  console.log('4');
}
```

위는 내가 처음 시도한 코드이다. fs 모듈을 사용하면 오류가 난다는 블로그 글이 있어서 `readline`으로 다시 시도해보았다.

```js
var readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function(line) {
  input.push(line);
}).on('close', function() {
  let x = Number(input[0]);
  let y = Number(input[1]);

  if (x > 0 && y > 0) {
    console.log('1');
  } else if (x < 0 && y > 0) {
    console.log('2');
  } else if (x < 0 && y < 0) {
    console.log('3');
  } else if (x > 0 && y < 0) {
    console.log('4');
  }
  process.exit();
});
```

## 알람 시계

[2884번 문제](https://www.acmicpc.net/problem/2884)

상근이는 매일 아침 알람을 듣고 일어난다. 알람을 듣고 바로 일어나면 다행이겠지만, 항상 조금만 더 자려는 마음 때문에 매일 학교를 지각하고 있다.

상근이는 모든 방법을 동원해보았지만, 조금만 더 자려는 마음은 그 어떤 것도 없앨 수가 없었다.

이런 상근이를 불쌍하게 보던, 창영이는 자신이 사용하는 방법을 추천해 주었다.

바로 "45분 일찍 알람 설정하기"이다.

이 방법은 단순하다. 원래 설정되어 있는 알람을 45분 앞서는 시간으로 바꾸는 것이다. 어차피 알람 소리를 들으면, 알람을 끄고 조금 더 잘 것이기 때문이다. 이 방법을 사용하면, 매일 아침 더 잤다는 기분을 느낄 수 있고, 학교도 지각하지 않게 된다.

현재 상근이가 설정한 알람 시각이 주어졌을 때, 창영이의 방법을 사용한다면, 이를 언제로 고쳐야 하는지 구하는 프로그램을 작성하시오.

```js
var input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .split(' ');
var hour = Number(input[0]);
var minute = Number(input[1]);

minute = minute - 45;

if (minute < 0) {
  minute += 60;
  hour -= 1;

  if (hour === -1) {
    hour = 23;
  }
}

console.log(hour + ' ' + minute);
```

바보같지만 시간이 -1이 되면 23시가 되는걸 생각하는걸 못했다. 흑흑.
