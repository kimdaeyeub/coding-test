const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const n = Number(input[0]);

const a = input[1].split(" ").map(Number);
const b = input[2].split(" ").map(Number);

const sortA = a.sort((a, b) => a - b);
const sortB = b.sort((a, b) => b - a);

let result = 0;
for (let i = 0; i < n; i++) {
  result += a[i] * b[i];
}

console.log(result);
