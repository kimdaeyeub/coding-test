const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().split("\n");

const num = Number(input[0]);

let total = 0;
for (let i = 0; i <= num; i++) {
  total += i;
}

console.log(total);
