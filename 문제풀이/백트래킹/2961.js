const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const testCase = Number(input[0]);

let data = [];
let visited = new Array(testCase).fill(false);
let selected = [];

for (let i = 1; i <= testCase; i++) {
  const val = input[i].split(" ").map(Number);
  data.push(val);
}

let val1 = 1;
let val2 = 0;
let minValue = 100000;

function dfs(depth, start) {
  if (depth === start + 1) {
    for (let x of selected) {
      val1 *= Number(data[x][0]);
      val2 += Number(data[x][1]);
    }
    const temp = val1 - val2;
    minValue = Math.min(minValue, Math.abs(temp));
    val1 = 1;
    val2 = 0;
    return;
  }

  for (let i = 0; i < testCase; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    selected.push(i);
    dfs(depth + 1, start);
    visited[i] = false;
    selected.pop();
  }
}

for (let i = 0; i < testCase; i++) {
  dfs(0, i);
}

console.log(minValue);
