function dfs(depth, start) {
  if (depth == m) {
    let result = [];
    for (let x of selected) result.push(chicken[x]);
    let sum = 0;
    for (let [hx, hy] of house) {
      let temp = 1e9;
      for (let [i, j] of result) {
        temp = Math.min(temp, Math.abs(hx - i) + Math.abs(hy - j));
      }
      sum += temp;
    }
    answer = Math.min(answer, sum);
    return;
  }
  for (let i = start; i < chicken.length; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    selected.push(i);
    dfs(depth + 1, i + 1);
    visited[i] = false;
    selected.pop();
  }
}

let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");
let [n, m] = input[0].split(" ").map(Number);
let chicken = [];
let house = [];
for (let i = 1; i <= n; i++) {
  let arr = input[i].split(" ").map(Number);
  for (let x = 0; x < n; x++) {
    if (arr[x] == 2) chicken.push([i, x]);

    if (arr[x] == 1) house.push([i, x]);
  }
}

let visited = new Array(chicken.length).fill(false);
let selected = [];
let answer = 1e9;

dfs(0, 0);
console.log(answer);
