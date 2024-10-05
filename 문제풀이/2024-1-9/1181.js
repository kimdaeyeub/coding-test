const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const testCaseNum = input.splice(0, 1);

let arr = input.sort();
arr = input.sort((a, b) => {
  return a.length - b.length;
});
const newSet = new Set();
arr.map((item) => newSet.add(item));
arr = [];
newSet.forEach((item) => arr.push(item));
console.log(arr.join("\n"));
