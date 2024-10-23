const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);

let arr = new Array(N + 1).fill(0);
let list = input[1].split(" ").map(Number);
for (let i = 0; i < list.length; i++) {
  arr[i + 1] = list[i];
}

for (let i = 1; i < arr.length; i++) {
  if (i === 1) continue;
  for (let j = 1; j <= i; j++) {
    arr[i] = Math.max(arr[i], arr[j] + arr[i - j]);
  }
}
console.log(arr[arr.length - 1]);
