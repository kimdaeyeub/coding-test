// N:1 => 1
// N:2 => 2
// N:3 => 4
// N:4 => 7
// N:5 => 13
// N:6 => 24
// N:7 =>44

const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);
let max = Math.max(...input.filter((_, index) => index !== 0).map(Number));

let arr = new Array(max + 1).fill(0);

arr[1] = 1;
arr[2] = 2;
arr[3] = 4;
function solution(n) {
  if (arr[n] !== 0) {
    return arr[n];
  }

  let value = solution(n - 3) + solution(n - 2) + solution(n - 1);
  arr[n] = value;
  return value;
}

for (let i = 1; i <= N; i++) {
  console.log(solution(Number(input[i])));
}
