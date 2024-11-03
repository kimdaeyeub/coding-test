const fs = require("fs");

const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map(Number));

let x = 0;
let y = 0;
let max = 0;

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (input[i][j] >= max) {
      max = input[i][j];
      x = j + 1;
      y = i + 1;
    }
  }
}

console.log(`${max}`);
console.log(`${y} ${x}`);
