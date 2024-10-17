const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().split("\n");

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  const str = input[i].split("");
  console.log(`${str[0]}${str[str.length - 1]}`);
}
