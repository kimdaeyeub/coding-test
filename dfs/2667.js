const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const n = Number(input[0]); //7

let arr = [];

function dfs(x, y) {
  if (x <= -1 || y <= -1 || x >= n || y >= n) {
    return 0;
  }
  if (arr[x][y] >= 1) {
    let temp = 1;
    arr[x][y] = -1;
    temp += dfs(x - 1, y);
    temp += dfs(x + 1, y);
    temp += dfs(x, y - 1);
    temp += dfs(x, y + 1);
    return temp;
  }
  return 0;
}

for (let i = 1; i <= n; i++) {
  const data = input[i].split("").map(Number);
  arr.push(data);
}
let result = [];
for (let i = 0; i < n; i++) {
  //x축
  for (let x = 0; x < n; x++) {
    //y축
    let current = dfs(i, x);
    if (current > 0) result.push(current);
  }
}

console.log(result.length);
const list = result.sort((a, b) => a - b);
console.log(list.join("\n"));
