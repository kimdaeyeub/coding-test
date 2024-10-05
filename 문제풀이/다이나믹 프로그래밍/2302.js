const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const n = Number(input[0]);

// 1 => 1
// 2=>2
// 3 => 3
// 4 => 5

// 피보나치

let arr = [];
arr[0] = 0;
for (let i = 2; i < input.length; i++) {
  const num = Number(input[i]);
  arr.push(num);
}
arr.push(n + 1);

let dp = new Array(41).fill(0);

dp[0] = 1;
dp[1] = 1;
for (let i = 2; i < dp.length; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}

let result = [];
for (let i = 1; i < arr.length; i++) {
  const num = arr[i] - arr[i - 1] - 1;
  result.push(dp[num]);
}
result = result.join("*");
console.log(eval(result));
