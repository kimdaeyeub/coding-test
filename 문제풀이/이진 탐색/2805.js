const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [testCase, leng] = input[0].split(" ").map(Number);

const trees = input[1].split(" ").map(Number);

let start = 0;
let end = trees.reduce((a, b) => Math.max(a, b));

let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;
  for (let x of trees) {
    if (x > mid) {
      total += x - mid;
    }
  }
  if (total < leng) {
    end = mid - 1;
  } else {
    result = mid;
    start = mid + 1;
  }
}

console.log(result);
