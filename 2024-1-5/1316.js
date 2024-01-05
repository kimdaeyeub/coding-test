const { count } = require("console");
const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().split("\n");

const testCase = Number(input[0]);

function check(data) {
  let newSet = new Set([data[0]]);
  for (let i = 0; i < data.length - 1; i++) {
    if (data[i] !== data[i + 1]) {
      if (newSet.has(data[i + 1])) {
        return false;
      } else {
        newSet.add(data[i + 1]);
      }
    }
  }
  return true;
}
let answer = 0;
for (let i = 1; i < testCase + 1; i++) {
  if (check(input[i])) answer += 1;
}

console.log(answer);
