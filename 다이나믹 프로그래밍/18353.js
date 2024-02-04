const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const n = Number(input[0]);

let arr = input[1].split(" ").map(Number);

arr = arr.reverse();

let dp = new Array(n).fill(1);

for (let i = 1; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

console.log(n - Math.max(...dp));
