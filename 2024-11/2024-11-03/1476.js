const fs = require("fs");

const [a, b, c] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let year = 1;
while (true) {
  if ((year - a) % 15 === 0 && (year - b) % 28 === 0 && (year - c) % 19 === 0) {
    break;
  }
  year++;
}
console.log(year);
