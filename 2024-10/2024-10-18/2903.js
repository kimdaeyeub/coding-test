// 3 5 9 17
// 1 2 3 4

const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);

let arr = [3];
for (let i = 2; i <= N; i++) {
  arr.push(arr[arr.length - 1] + Math.pow(2, i - 1));
}

console.log(Math.pow(arr[arr.length - 1], 2));
