const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let selected = [];
let visited = [];
let answer = "";

function sol(depth, arr, start, n) {
  if (depth === 6) {
    answer += selected.join(" ") + "\n";
    return;
  }
  for (let i = start; i < n; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    selected.push(arr[i]);
    sol(depth + 1, arr, i, n);
    visited[i] = false;
    selected.pop();
  }
}

for (let i = 0; i < input.length - 1; i++) {
  const data = input[i].split(" ").map(Number);
  const n = data[0];
  let arr = [];
  for (let j = 1; j <= n; j++) {
    arr.push(data[j]);
  }
  visited = new Array(n).fill(false);
  sol(0, arr, 0, n);
  console.log(answer);
  answer = "";
}
