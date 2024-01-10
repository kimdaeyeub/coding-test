const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const data = input[0];

let arr = data.split("-");

let result = [];

for (let i = 0; i < arr.length; i++) {
  const val = arr[i]
    .split("+")
    .map(Number)
    .reduce((a, b) => a + b);
  result.push(val);
}

console.log(result.reduce((a, b) => a - b));
