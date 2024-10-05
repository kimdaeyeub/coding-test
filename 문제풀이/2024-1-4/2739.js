const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().split("\n");

const num = Number(input[0]);

for (let i = 1; i < 10; i++) {
  console.log(`${num} * ${i} = ${num * i}`);
}
