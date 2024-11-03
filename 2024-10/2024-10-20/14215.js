const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim();

let [a, b, c] = input
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

if (c >= a + b) {
  c = a + b - 1;
}

console.log(a + b + c);
