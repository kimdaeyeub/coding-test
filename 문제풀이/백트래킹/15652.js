const fs = require("fs");

const [n, m] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")[0]
  .split(" ")
  .map(Number);

let selected = [];
let str = "";
let arr = [];
let tempBool = true;

for (let i = 1; i <= n; i++) arr.push(i);

function dfs(list, depth) {
  if (depth === m) {
    selected.reduce((a, b) => {
      if (a > b) {
        tempBool = false;
      }
      return b;
    });

    if (tempBool) {
      for (let x of selected) {
        str += x + " ";
      }
      console.log(str);
      str = "";
    }
    tempBool = true;
    return;
  }

  for (let i = 1; i <= n; i++) {
    selected.push(i);
    dfs(list, depth + 1);
    selected.pop();
  }
}

dfs(arr, 0);
