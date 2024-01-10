const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);

input.splice(0, 1);

// 동전의 종류가 담긴 배열
let data = input;

// 필요한 갯수의 동전을 저장하기 위한 변수
let count = 0;

// 일정 갯수의 동전과 그에 해당하는 금액이 빠진뒤의 금액을 저장하기 위한 변수
let rest = k;
for (let i = n - 1; i >= 0; i--) {
  if (data[i] <= k && rest !== 0) {
    count += parseInt(rest / data[i]);
    rest = rest % data[i];
  }
}

console.log(count);
