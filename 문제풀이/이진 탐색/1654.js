const fs = require("fs");

let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const firstLine = input.splice(0, 1);

const [k, n] = firstLine[0].split(" ").map(Number);
const lines = input.map(Number);

let result = 0;

let start = 1;
let end = lines.reduce((a, b) => Math.max(a, b));

while (start <= end) {
  let count = 0;
  let mid = parseInt((start + end) / 2);
  for (let line of lines) {
    const val = parseInt(line / mid);
    count += val;
  }
  if (count < n) {
    end = mid - 1;
  } else {
    result = mid;
    start = mid + 1;
  }
}

console.log(result);
