const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const n = Number(input[0]);

const data = input[1].split(" ").map(Number);

let selected = [];
let visited = new Array(data.length).fill(false);
let maxValue = 0;

function dfs(depth) {
  if (depth === n) {
    let temp = 0;
    for (let i = 0; i < n - 1; i++) {
      temp += Math.abs(selected[i] - selected[i + 1]);
    }
    maxValue = Math.max(maxValue, temp);
    return;
  }
  for (let x = 0; x < n; x++) {
    if (visited[x]) continue;
    visited[x] = true;
    selected.push(data[x]);
    dfs(depth + 1);
    visited[x] = false;
    selected.pop();
  }
}

dfs(0);

console.log(maxValue);
