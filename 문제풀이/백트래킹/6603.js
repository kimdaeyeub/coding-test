const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let selected = [];
let visited = [];

function dfs(arr, depth, start) {
  if (depth === 6) {
    let str = "";
    for (let x of selected) {
      str += x + " ";
    }
    console.log(str);
    return;
  }

  for (let i = start; i < arr.length; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    selected.push(arr[i]);
    dfs(arr, depth + 1, i + 1);
    selected.pop();
    visited[i] = false;
  }
}

for (let i = 0; i < input.length - 1; i++) {
  const data = input[i].split(" ").map(Number);
  visited = new Array(data[0]).fill(false);
  dfs(data, 0, 1);
  console.log();
}
