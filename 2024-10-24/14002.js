const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);

const datas = input[1].split(" ").map(Number);

let arr = new Array(N).fill(0);

arr[0] = 1;

for (let i = 1; i < N; i++) {
  let max = 0;
  for (let j = 0; j < i; j++) {
    if (datas[j] < datas[i]) {
      max = Math.max(max, arr[j]);
    }
  }
  arr[i] = max + 1;
}

let maxLength = Math.max(...arr);

let result = [];
let targetLength = maxLength;
for (let i = N - 1; i >= 0; i--) {
  if (arr[i] === targetLength) {
    result.push(datas[i]);
    targetLength--;
  }
}

console.log(result.length);
console.log(result.reverse().join(" "));
