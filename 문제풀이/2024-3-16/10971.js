const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const n = Number(input[0]);

let arr = [];
for (let i = 1; i <= n; i++) {
  arr[i - 1] = input[i].split(" ").map(Number);
}

let visited = new Array(n).fill(false);
let selected = [];
let minVal = 1e9;

function sol(arr, depth, start) {
  if (depth === n && arr[start][selected[0]] > 0) {
    let val = 0;
    for (let i = 0; i < selected.length - 1; i++) {
      val += arr[selected[i]][selected[i + 1]];
    }
    val += arr[selected[depth - 1]][selected[0]];
    minVal = Math.min(minVal, val);
    return;
  }
  for (let i = 0; i < n; i++) {
    if (!visited[i] && arr[start][i] > 0) {
      visited[i] = true;
      selected.push(i);
      sol(arr, depth + 1, i);
      visited[i] = false;
      selected.pop();
    }
  }
}

for (let i = 0; i < n; i++) {
  visited[i] = true;
  selected.push(i);
  sol(arr, 1, i);
  visited[i] = false;
  selected.pop();
}

console.log(minVal);
