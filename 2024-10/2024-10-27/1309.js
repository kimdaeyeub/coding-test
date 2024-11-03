//N:1 => 3
//N:2 => 7
// N:3 => 17
// N:4 => 41

// dp[n] = 2dp[n-1]+dp[n-2]

const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim();

const N = Number(input);

let dp = new Array(N + 1).fill(0);

dp[1] = 3;
dp[2] = 7;

function solution(n) {
  if (dp[n] !== 0) {
    return dp[n];
  }

  dp[n] = (2 * solution(n - 1) + solution(n - 2)) % 9901;
  return dp[n];
}

console.log(solution(N));
