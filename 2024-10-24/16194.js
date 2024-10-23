const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);

const list = input[1].split(" ").map(Number);

let arr = new Array(N + 1).fill(Infinity);

for (let i = 0; i < list.length; i++) {
  arr[i + 1] = list[i];
}

for (let i = 1; i <= N; i++) {
  for (let j = 1; j < i; j++) {
    arr[i] = Math.min(arr[i], arr[j] + arr[i - j]);
  }
}

console.log(arr[arr.length - 1]);
