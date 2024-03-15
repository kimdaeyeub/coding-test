const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

let arr = [];
for (let i = 1; i <= n; i++) arr.push(i);
let visited = new Array(n + 1).fill(false);
let selected = [];
let answer = "";

function sol(arr, start, depth) {
  if (depth === m) {
    return (answer += selected.join(" ") + "\n");
  }
  for (let i = start; i <= n; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    selected.push(i);
    sol(arr, i, depth + 1);
    visited[i] = false;
    selected.pop();
  }
}

sol(arr, 1, 0);
console.log(answer);
