const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const num = Number(input[0]);

let visited = new Array(num).fill(false);
let routes = [];
let selected = [];
let min;

for (let i = 1; i <= num; i++) {
  routes.push(input[i].split(" ").map(Number));
}

function dfs(arr, depth) {
  if (depth === num) {
    let total = 0;
    let temp = [];
    for (let i = 0; i < selected.length; i++) {
      let next = 0;
      const item = Number(selected[i]);
      if (i === selected.length - 1) {
        next = selected[0];
      } else {
        next = selected[i + 1];
      }
      if (routes[item - 1][next - 1] !== 0) {
        temp.push(routes[item - 1][next - 1]);
      } else return;
    }
    total = temp.reduce((a, b) => a + b);
    if (min) {
      min = Math.min(min, total);
    } else {
      min = total;
    }
    return;
  }

  for (let i = 1; i <= num; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    selected.push(i);
    dfs(arr, depth + 1);
    visited[i] = false;
    selected.pop();
  }
}

dfs(routes, 0);
console.log(min);
