const fs = require("fs");

const input = fs
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map((a) => Number(a));

let maxIndex = 0;
const max = input.reduce((a, b, c) => {
  if (b === Math.max(a, b)) {
    maxIndex = c;
  }
  return Math.max(a, b);
});

console.log(`${max}\n${maxIndex + 1}`);
