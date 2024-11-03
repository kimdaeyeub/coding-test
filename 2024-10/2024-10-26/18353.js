const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);

let dp = new Array(N).fill(1);

const arr = input[1].split(" ").map(Number);

for (let i = 1; i < arr.length; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[j] > arr[i]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

console.log(N - Math.max(...dp));
