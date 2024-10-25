const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input.shift());

let dp = [];
dp.push(Number(input[0]));

for (let i = 1; i < N; i++) {
  const list = input[i].split(" ").map(Number);
  let temp = dp;
  dp = [];
  for (let j = 0; j < list.length; j++) {
    if (j === 0) {
      dp.push(temp[j] + list[j]);
    } else if (j === list.length - 1) {
      dp.push(temp[j - 1] + list[j]);
    } else {
      dp.push(Math.max(temp[j - 1] + list[j], temp[j] + list[j]));
    }
  }
}

console.log(Math.max(...dp));
