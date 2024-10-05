// 6
// 4 5
// 2 3 3 4
// 0 1 1 2 1 2 2 3
// 0 1 1 0 1 1 0 1 0 1 1 2
// 0 1 1 0 1 1 0 1 0 1 1 0 1

// 1:8
// 0:5

// 3
// 1 2
// 1 0 1
const fs = require("fs");

let [testCase, ...value] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

value = value.map(Number);
const maxValue = Math.max(...value);

let d = [];
for (let i = 0; i <= maxValue; i++) d[i] = [];

function sol(num) {
  if (num === 0) {
    return (d[num] = [1, 0]);
  }
  if (num === 1) {
    return (d[num] = [0, 1]);
  }
  if (d[num].length !== 0) {
    return d[num];
  }
  sol(num - 2) + sol(num - 1);
  d[num] = [d[num - 2][0] + d[num - 1][0], d[num - 2][1] + d[num - 1][1]];
  return d[num];
}

let answer = "";
for (let i = 0; i < testCase; i++) {
  const val = Number(value[i]);
  sol(val);
  const str = d[val].join(" ");
  answer += str + "\n";
}

console.log(answer);
