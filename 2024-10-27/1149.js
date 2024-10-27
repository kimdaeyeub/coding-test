const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);

let dp = new Array(3).fill(0);

let init = input[1].split(" ").map(Number);
for (let i = 0; i < init.length; i++) {
  dp[i] = init[i];
}

for (let i = 2; i <= N; i++) {
  const arr = input[i].split(" ").map(Number);
  let temp = [];
  for (let j = 0; j < 3; j++) {
    if (j === 0) {
      temp.push(Math.min(arr[j] + dp[j + 1], arr[j] + dp[j + 2]));
    } else if (j === 1) {
      temp.push(Math.min(arr[j] + dp[j - 1], arr[j] + dp[j + 1]));
    } else {
      temp.push(Math.min(arr[j] + dp[j - 1], arr[j] + dp[j - 2]));
    }
  }
  dp = temp;
}

console.log(Math.min(...dp));
