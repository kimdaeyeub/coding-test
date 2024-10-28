const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

for (let x of input) {
  console.log(x);
}
