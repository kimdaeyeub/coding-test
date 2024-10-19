const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);

const list = input[1].split(" ").map(Number);
let count = 0;
for (let i = 0; i < list.length; i++) {
  if (list[i] === 1) continue;
  let temp = [];
  for (let j = 2; j <= list[i]; j++) {
    if (list[i] % j === 0) temp.push(j);
  }
  if (temp.length === 1) {
    count += 1;
  }
}

console.log(count);
