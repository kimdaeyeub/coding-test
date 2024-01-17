const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const num = Number(input[0]);

let visited = new Array(num).fill(false);
let selected = [];
let answer = "";

function dfs(arr, depth) {
  if (depth === num) {
    for (let x of selected) answer += x + " ";
    answer += "\n";
    return;
  }

  for (let i = 1; i <= num; i++) {
    if (visited[i]) continue;
    selected.push(i);
    visited[i] = true;
    dfs(arr, depth + 1);
    selected.pop();
    visited[i] = false;
  }
}

dfs(num, 0);
console.log(answer);
