const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const n = Number(input[0]);

let visited = [];
for (let i = 0; i < n; i++) visited[i] = new Array(n).fill(false);

let selected = [];
function possible(col, i) {
  for (let [a, b] of selected) {
    if (Math.abs(col - a) === Math.abs(i - b) || a === col || b === i) {
      return false;
    }
  }
  return true;
}

let count = 0;

function sol(depth, col) {
  if (depth === n) {
    count += 1;
    return;
  }
  for (let i = 0; i < n; i++) {
    if (visited[col][i] || !possible(col, i)) continue;
    selected.push([col, i]);
    visited[col][i] = true;
    sol(depth + 1, col + 1);
    visited[col][i] = false;
    selected.pop();
  }
}

sol(0, 0);
console.log(count);
