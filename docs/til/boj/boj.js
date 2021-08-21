let input = 5;

for (var i = 0; i < input; i++) {
  let star = '';
  for (var j = input - 1; j >= 0; j--) {
    star += j <= i ? '*' : ' ';
  }
  console.log(star);
}
