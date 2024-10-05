const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const n = Number(input[0]);

let arr = [];

for (let i = 1; i <= n; i++) {
  const val = Number(input[i]);
  arr.push(val);
}

arr = arr.sort((a, b) => a - b);

let result = 0;
for (let i = 1; i <= n; i++) {
  result = Math.max(arr[i - 1] * (n - i + 1), result);
}
console.log(result);
