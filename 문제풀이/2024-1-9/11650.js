const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const testCase = input[0];
let arr = [];
for (let i = 1; i <= testCase; i++) {
  const num = input[i].split(" ").map(Number);
  arr.push(num);
}

arr = arr.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  }
  return a[0] - b[0];
});

arr = arr.map((val) => val.join(" "));
arr = arr.join("\n");

console.log(arr);
