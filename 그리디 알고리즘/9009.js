const fs = require("fs");

const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let pibo = [];

pibo.push(0);
pibo.push(1);

while (pibo[pibo.length - 1] < 1000000000)
  pibo.push(pibo[pibo.length - 2] + pibo[pibo.length - 1]);

const testCase = input[0];

for (let i = 1; i <= testCase; i++) {
  let n = input[i];
  let piboLength = pibo.length - 1;
  let result = [];
  while (n > 0) {
    if (n >= pibo[piboLength]) {
      n -= pibo[piboLength];
      result.push(pibo[piboLength]);
    }
    piboLength--;
  }
  result = result.sort((a, b) => a - b).join(" ");
  console.log(result);
}
