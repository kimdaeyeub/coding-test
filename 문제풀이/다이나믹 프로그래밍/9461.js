const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const testCase = Number(input[0]);

let dp = new Array(101).fill(0);
dp[1] = 1;
dp[2] = 1;
dp[3] = 1;

for (let i = 4; i <= 100; i++) {
  dp[i] = dp[i - 2] + dp[i - 3];
}

for (let i = 1; i <= testCase; i++) {
  const index = Number(input[i]);
  console.log(dp[index]);
}
