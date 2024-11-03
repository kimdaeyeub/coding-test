// N:1 => 1 (1)
// N:2 => 1+1 2 (2)
// N:3 => 1+1+1 1+2 2+1 3 (4)
// N:4 => 1+1+1+1 2+2 1+3 3+1 1+1+2 1+2+1 2+1+1 (7)
// N:5 => 1+1+1+1+1 2+3 3+2 1+4 4+1 2+2+1 1+2+2 2+1+2 1+1+1+2

const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);
const mod = 1000000009;
let dp = new Array(1000001).fill(0);
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;
for (let i = 1; i <= N; i++) {
  const n = Number(input[i]);

  for (let j = 4; j <= n; j++) {
    if (dp[j] !== 0) continue;
    dp[j] = (dp[j - 1] + dp[j - 2] + dp[j - 3]) % mod;
  }
}

for (let i = 1; i <= N; i++) {
  console.log(dp[input[i]]);
}
