const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim();

let result = 1;

for (let i = 0; i < input.length; i++) {
  if (i === input.length - 1 - i) break;
  if (input[i] !== input[input.length - 1 - i]) {
    result = 0;
    break;
  }
}

console.log(result);
