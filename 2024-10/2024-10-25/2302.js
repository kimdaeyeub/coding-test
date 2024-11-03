const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input.shift());
const M = Number(input.shift());

const vip = [0, ...input.map(Number), N + 1];

let dp = new Array(N + 1).fill(0);
dp[0] = 1;
dp[1] = 1;
dp[2] = 2;
function solution(n) {
  if (dp[n] !== 0) {
    return dp[n];
  }

  dp[n] = solution(n - 1) + solution(n - 2);
  return dp[n];
}
let results = 1;
for (let i = 1; i < vip.length; i++) {
  const val = solution(vip[i] - 1 - vip[i - 1]);
  results *= val;
}

console.log(results);
