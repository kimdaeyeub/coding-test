const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input.shift());

const dp = [];

for (let i = 0; i < input.length; i++) {
  dp.push(Number(input[i]));
}

for (let i = 1; i < dp.length; i++) {
  dp[i] = Math.max(dp[i - 1] * dp[i], dp[i]);
}

console.log(Math.max(...dp).toFixed(3));
