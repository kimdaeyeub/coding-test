const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");

const firstLine = input[0];

const N = Number(firstLine.split(" ")[0]);
let K = Number(firstLine.split(" ")[1]);
let count = 0;

for (index = 1; index < N; index++) {
  if (K > 0) {
    if (Math.floor(K / input[N - index]) > 0) {
      value = Math.floor(K / input[N - index]);
      count += value;
      console.log(value);
      K -= value * input[N - index];
    }
  }
}
// console.log(count);
