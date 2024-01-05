//5의 갯수는 5로 나눈 몫보다 작거나 같아야한다. => 같을경우는 해당 숫자가 5의 배수일경우
//5의 갯수를 n

//반복문을 통해 n을 줄여나가면서 3의 갯수 m을 찾아야한다.
//m은 5보다 무조건적을 작아야 한다.

const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString();

const num = Number(input);
let m = 0;
let n = 0;

if (num % 5 === 0) {
  n = num / 5;
  console.log(m + n);
  return;
} else {
  //n=3
  k = Math.floor(num / 5);
  for (let i = k; i >= 0; i--) {
    const remain = num - 5 * i;
    if (remain % 3 === 0) {
      m = remain / 3;
      n = i;
      console.log(m + n);
      return;
    }
  }
  console.log(-1);
}
