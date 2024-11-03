const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);

let arr = new Array(N).fill(0);
const list = input[1].split(" ").map(Number);
arr[0] = 1;
for (let i = 1; i < N; i++) {
  let max = 0;
  for (let j = 0; j < i; j++) {
    if (list[j] < list[i]) {
      max = Math.max(max, arr[j]);
    }
  }
  arr[i] = max + 1;
}

console.log(Math.max(...arr));
