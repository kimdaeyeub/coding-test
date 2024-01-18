const fs = require("fs");

const [n, m] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")[0]
  .split(" ")
  .map(Number);

let data = [];
for (let i = 1; i <= n; i++) data.push(i);

let selected = [];
let str = "";

function dfs(arr, depth) {
  if (depth === m) {
    for (let x of selected) {
      str += x + " ";
    }
    str += "\n";
    return;
  }

  for (let x of arr) {
    selected.push(x);
    dfs(arr, depth + 1);
    selected.pop();
  }
}

dfs(data, 0);
console.log(str);
