const fs = require("fs");

const [n, k] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let result = [];
if ((k * (k + 1)) / 2 > n) {
  console.log(-1);
} else {
  if ((n - (k * (k + 1)) / 2) % k === 0) {
    console.log(k - 1);
  } else {
    console.log(k);
  }
}
