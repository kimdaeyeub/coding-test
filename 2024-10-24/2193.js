const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim();

const N = Number(input);

let arr = new Array(N + 1).fill(BigInt(0));

arr[1] = BigInt(1);
arr[2] = BigInt(1);

function solution(n) {
  if (arr[n] !== BigInt(0)) {
    return arr[n];
  }

  let value = solution(n - 1) + solution(n - 2);
  arr[n] = value;
  return value;
}

console.log(solution(N).toString());
