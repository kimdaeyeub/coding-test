const fs = require("fs");

const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(""));

let max = 0;
for (let x of input) {
  max = Math.max(max, x.length);
}

let answer = "";
for (let i = 0; i < max; i++) {
  for (let j = 0; j < input.length; j++) {
    if (!input[j][i]) continue;
    answer += input[j][i];
  }
}

console.log(answer);
