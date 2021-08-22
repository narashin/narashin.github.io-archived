---
title: for
description: for와 관련한 백준 문제풀이
sidebarDepth: 1
---

[[toc]]

## A+B - 3

[10950번 문제](https://www.acmicpc.net/problem/10950)

### 문제

두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

### 입력

첫째 줄에 테스트 케이스의 개수 T가 주어진다.

각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

```js
let input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .split('\n');
let T = Number(input[0]);
for (let i = 1; i <= T; i++) {
  let numbers = input[i].split(' ');
  console.log(Number(numbers[0]) + Number(numbers[1]));
}
```

입력을 for 문 안에서 어떻게 받아야할지 좀 고민했다. 어차피 numbers에 input은 배열로 들어갈테니 그걸 활용해서 계산하면 되는거구나.

## 합

[8393번 문제](https://www.acmicpc.net/problem/8393)

### 문제

n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.

### 입력

첫째 줄에 n (1 ≤ n ≤ 10,000)이 주어진다.

### 출력

1부터 n까지 합을 출력한다.

```js
let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split('');
let n = Number(input[0]);
let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += i;
}

console.log(sum);
```

계속 백준에서 삽질을 하다보니 vsCode에서 연습을 좀 하다가 정답을 제출해야겠다는 생각이 들었다.
[데구리님 블로그](https://degurii.tistory.com/108#code) 를 참고해서 코드를 조금 바꾸기로 했다.

## 빠른 A+B

[15552번 문제](https://www.acmicpc.net/problem/15552)

### 문제

본격적으로 for문 문제를 풀기 전에 주의해야 할 점이 있다. 입출력 방식이 느리면 여러 줄을 입력받거나 출력할 때 시간초과가 날 수 있다는 점이다.

C++을 사용하고 있고 cin/cout을 사용하고자 한다면, cin.tie(NULL)과 sync_with_stdio(false)를 둘 다 적용해 주고, endl 대신 개행문자(\n)를 쓰자. 단, 이렇게 하면 더 이상 scanf/printf/puts/getchar/putchar 등 C의 입출력 방식을 사용하면 안 된다.

Java를 사용하고 있다면, Scanner와 System.out.println 대신 BufferedReader와 BufferedWriter를 사용할 수 있다. BufferedWriter.flush는 맨 마지막에 한 번만 하면 된다.

Python을 사용하고 있다면, input 대신 sys.stdin.readline을 사용할 수 있다. 단, 이때는 맨 끝의 개행문자까지 같이 입력받기 때문에 문자열을 저장하고 싶을 경우 .rstrip()을 추가로 해 주는 것이 좋다.

또한 입력과 출력 스트림은 별개이므로, 테스트케이스를 전부 입력받아서 저장한 뒤 전부 출력할 필요는 없다. 테스트케이스를 하나 받은 뒤 하나 출력해도 된다.

자세한 설명 및 다른 언어의 경우는 이 글에 설명되어 있다.

[이 블로그](https://www.acmicpc.net/blog/view/55) 글에서 BOJ의 기타 여러 가지 팁을 볼 수 있다.

### 입력

첫 줄에 테스트케이스의 개수 T가 주어진다. T는 최대 1,000,000이다. 다음 T줄에는 각각 두 정수 A와 B가 주어진다. A와 B는 1 이상, 1,000 이하이다.

### 출력

각 테스트케이스마다 A+B를 한 줄에 하나씩 순서대로 출력한다.

```js
var readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let answer = '';
rl.on('line', (line) => {
  const input = line.split(' ');

  if (input.length === 2) {
    const A = parseInt(input[0]);
    const B = parseInt(input[1]);
    answer += A + B + '\n';
  }
}).on('close', () => {
  console.log(answer);
  process.exit();
});
```

위 정답은 본 문제 [글](https://www.acmicpc.net/board/view/22716)에 macro2520332님께서 남기신 코드이다.  
Node.js의 경우 매번 console.log로 출력하면 시간초과를 받는다고...

## N 찍기

[2742번 문제](https://www.acmicpc.net/problem/2741)

### 문제

자연수 N이 주어졌을 때, 1부터 N까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.

### 입력

첫째 줄에 100,000보다 작거나 같은 자연수 N이 주어진다.

### 출력

첫째 줄부터 N번째 줄 까지 차례대로 출력한다.

```js
var readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on('line', (line) => {
  const input = line.split('\n');

  for (var i = 1; i <= input[0]; i++) {
    console.log(i);
  }
}).on('close', () => {
  process.exit();
});
```

```js
var input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split('/n');
let number = Number(input[0]);

for (var i = 1; i <= number; i++) {
  console.log(i);
}
```

위에서 이어졌던 문제가 계속됐다. 또! console.log를 매번 실행해서 시간초과가 떠버림.

```js
var readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let answer = '';
rl.on('line', (line) => {
  const input = line.split('\n');
  for (var i = 1; i <= input[0]; i++) {
    answer += `${i}\n`;
  }
}).on('close', () => {
  console.log(answer);
  process.exit();
});
```

마지막에만 console.log 뿌리기 기억해...

## 기찍 N

[2742번 문제](https://www.acmicpc.net/problem/2742)

```js
var readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stout,
});

let answer = '';
rl.on('line', (line) => {
  const input = line.split('\n');
  for (var i = input[0]; (i) => 1; i--) {
    answer += `${i}\n`;
  }
}).on('close', () => {
  console.log(answer);
  process.exit();
});
```

메모리 초과 됨

```js
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n');
const number = Number(input[0]);
let answer = '';

for (var i = number; i >= 1; i--) {
  answer += i + '\n';
}
console.log(answer);
```

그냥 이렇게 풀었다.

## A+B -7

[11021번 문제](https://www.acmicpc.net/problem/11021)

### 문제

두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

### 입력

첫째 줄에 테스트 케이스의 개수 T가 주어진다.

각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

### 출력

각 테스트 케이스마다 "Case #x: "를 출력한 다음, A+B를 출력한다. 테스트 케이스 번호는 1부터 시작한다.

```js
let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n');
let T = Number(input[0]);
for (let i = 1; i <= T; i++) {
  let numbers = input[i].split(' ');
  console.log('Case #' + i + ': ' + (Number(numbers[0]) + Number(numbers[1])));
}
```

## A+B - 8

[11022번 문제](https://www.acmicpc.net/problem/11022)

### 문제

두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

### 입력

첫째 줄에 테스트 케이스의 개수 T가 주어진다.

각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

### 출력

각 테스트 케이스마다 "Case #x: A + B = C" 형식으로 출력한다. x는 테스트 케이스 번호이고 1부터 시작하며, C는 A+B이다.

```js
let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n');
for (let i = 1; i <= input[0]; i++) {
  let numbers = input[i].split(' ');
  const num1 = Number(numbers[0]);
  const num2 = Number(numbers[1]);
  console.log(`Case #${i}: ${num1} + ${num2} = ${num1 + num2}`);
}
```

## 별찍기 - 1

[2438번 문제](https://www.acmicpc.net/problem/2438)

### 문제

첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제

### 입력

첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

### 출력

첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.

```js
let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split(' ');

let star = '';

for (var i = 1; i <= input[0]; i++) {
  star += '*';
  console.log(star);
}
```

## 별찍기 - 2

[2439번 문제](https://www.acmicpc.net/problem/2439)

### 문제

첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제

하지만, 오른쪽을 기준으로 정렬한 별(예제 참고)을 출력하시오.

### 입력

첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

### 출력

첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.

```js
let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split(' ');

for (var i = 0; i < input; i++) {
  let star = '';
  for (var j = input - 1; j >= 0; j--) {
    star += j <= i ? '*' : ' ';
  }
  console.log(star);
}
```

## X보다 작은 수

[10871번 문제](https://www.acmicpc.net/problem/10871)

### 문제

정수 N개로 이루어진 수열 A와 정수 X가 주어진다. 이때, A에서 X보다 작은 수를 모두 출력하는 프로그램을 작성하시오.

### 입력

첫째 줄에 N과 X가 주어진다. (1 ≤ N, X ≤ 10,000)  
둘째 줄에 수열 A를 이루는 정수 N개가 주어진다. 주어지는 정수는 모두 1보다 크거나 같고, 10,000보다 작거나 같은 정수이다.

### 출력

X보다 작은 수를 입력받은 순서대로 공백으로 구분해 출력한다. X보다 작은 수는 적어도 하나 존재한다.
