const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) arr[i] = input[i].split(" ").map(Number);

let visited = new Array(n + 1).fill(false);
let selected = [];
let minVal = 1e9;

function sol(depth, leng) {
  if (depth === leng) {
    let temp = [];
    let a = 1;
    let b = 0;
    for (let x of selected) temp.push(arr[x]);
    for (let i = 0; i < temp.length; i++) {
      a *= temp[i][0];
      b += temp[i][1];
    }
    let val = Math.abs(a - b);
    minVal = Math.min(val, minVal);
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    selected.push(i);
    sol(depth + 1, leng);
    visited[i] = false;
    selected.pop();
  }
}

for (let i = 1; i <= n; i++) {
  sol(0, i);
}

console.log(minVal);
