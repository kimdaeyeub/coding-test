const fs = require("fs");

const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const caseNum = input.splice(0, 1);

const arr = input.sort((a, b) => a - b);

console.log(arr.join("\n"));
