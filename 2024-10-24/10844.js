const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim();

const N = Number(input);
const mod = 1000000000;

let dp = Array.from(Array(N + 1), () => Array(10).fill(0));

for (let i = 1; i <= 9; i++) {
  dp[1][i] = 1;
}

for (let i = 2; i <= N; i++) {
  for (let j = 0; j <= 9; j++) {
    if (j < 9) dp[i][j] += dp[i - 1][j + 1];
    if (j > 0) dp[i][j] += dp[i - 1][j - 1];
    dp[i][j] %= mod;
  }
}

let result = dp[N].reduce((a, b) => a + b) % mod;
console.log(result);
