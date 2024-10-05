const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const n = Number(input[0]);

const data = input[1].split(" ").map(Number);

data.sort((a, b) => a - b);

let result = 0;
for (let i = 0; i < n; i++) {
  result += data[i] * (n - i);
}

console.log(result);
