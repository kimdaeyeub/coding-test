const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim();

let N = Number(input);

let arr = new Array(N + 1).fill(Infinity);
arr[N] = 0;
for (let i = N; i >= 1; i--) {
  arr[i - 1] = Math.min(arr[i] + 1, arr[i - 1]);

  if (i % 3 === 0) {
    arr[i / 3] = Math.min(arr[i / 3], arr[i] + 1);
  }
  if (i % 2 === 0) {
    arr[i / 2] = Math.min(arr[i / 2], arr[i] + 1);
  }
}

console.log(arr[1]);
