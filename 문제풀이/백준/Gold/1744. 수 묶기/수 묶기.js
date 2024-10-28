const fs = require("fs");

const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const n = input.shift();
let arr = input.sort((a, b) => a - b);
let result = 0;

// 0 이하의 수들을 묶습니다.
while (arr.length > 0 && arr[0] <= 0) {
  let num = arr.shift();
  if (arr.length > 0 && arr[0] <= 0) {
    result += num * arr.shift();
  } else {
    result += num;
  }
}

arr = arr.reverse();

// 1 이상의 수들을 묶습니다.
while (arr.length > 0 && arr[0] > 1) {
  let num = arr.shift();
  if (arr.length > 0 && arr[0] > 1) {
    result += num * arr.shift();
  } else {
    result += num;
  }
}

// 남은 수들을 더합니다.
result += arr.reduce((acc, cur) => acc + cur, 0);

console.log(result);
