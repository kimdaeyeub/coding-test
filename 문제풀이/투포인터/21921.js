const fs = require("fs");
const [firstLine, secondLine] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
const [N, X] = firstLine.split(" ").map(Number);
const visitors = secondLine.split(" ").map(Number);

let maxSum = 0;
let currentSum = 0;
for (let i = 0; i < X; i++) {
  currentSum += visitors[i];
}
maxSum = currentSum;

let maxPeriods = 1;
for (let i = X; i < N; i++) {
  currentSum = currentSum - visitors[i - X] + visitors[i];
  if (currentSum > maxSum) {
    maxSum = currentSum;
    maxPeriods = 1;
  } else if (currentSum === maxSum) {
    maxPeriods++;
  }
}

if (maxSum === 0) {
  console.log("SAD");
} else {
  console.log(maxSum);
  console.log(maxPeriods);
}
