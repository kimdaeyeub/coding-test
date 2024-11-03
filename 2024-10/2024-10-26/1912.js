const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().split("\n");

const N = Number(input[0]);

let dp = input[1].split(" ").map(Number);

for (let i = 1; i < N; i++) {
  dp[i] = Math.max(dp[i], dp[i] + dp[i - 1]);
}

console.log(Math.max(...dp));
