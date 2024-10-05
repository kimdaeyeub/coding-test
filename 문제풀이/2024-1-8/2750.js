const fs = require("fs");

const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const caseNum = input.splice(0, 1);

let minIndex = 0;
for (let i = 0; i < caseNum - 1; i++) {
  minIndex = i;
  for (j = i + 1; j < caseNum; j++) {
    if (input[minIndex] > input[j]) {
      minIndex = j;
    }
  }

  let temp = input[i];
  input[i] = input[minIndex];
  input[minIndex] = temp;
}

console.log(input.join("\n"));
