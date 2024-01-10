const fs = require("fs");

const [a, b] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let rest = b;
let count = 1;
let success = false;

while (a <= rest) {
  if (a === rest) {
    success = true;
    break;
  }
  if (rest % 2 === 0) {
    rest = rest / 2;
  } else if (rest % 10 === 1) {
    rest = parseInt(rest / 10);
  } else {
    break;
  }
  count++;
}

if (success) {
  console.log(count);
} else {
  console.log(-1);
}
