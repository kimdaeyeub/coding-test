const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim();

let result = 1;
for (let i = 0; i <= input; i++) {
  if (i === 0) continue;
  result *= i;
}

console.log(result);
