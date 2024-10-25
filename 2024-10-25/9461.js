// 1, 1, 1, 2, 2, 3, 4, 5, 7, 9, 12, 16, 21

const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input.shift());

const max = Math.max(...input);

let dp = new Array(max).fill(0);
dp[0] = 1;
dp[1] = 1;
dp[2] = 1;

function solution(n) {
  if (dp[n] !== 0) {
    return dp[n];
  }

  dp[n] = solution(n - 2) + solution(n - 3);
  return dp[n];
}

for (let i = 0; i < N; i++) {
  const testCase = Number(input[i]);
  const result = solution(testCase - 1);
  console.log(result);
}
