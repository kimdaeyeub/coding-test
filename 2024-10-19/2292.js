const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);

function solution(n) {
  let q = 1;
  let x = 6;
  let count = 1;
  while (true) {
    if (q >= n) break;
    q += x;
    x += 6;
    count += 1;
  }
  return count;
}

console.log(solution(N));
