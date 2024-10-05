const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const n = Number(input[0]);

let visited = new Array(n + 1).fill(false);
let arr = [];
for (let i = 0; i <= n; i++) arr.push(i);
let selected = [];
let answer = "";

function solution(depth) {
  if (depth === n) {
    let result = [];
    for (let x of selected) result.push(arr[x]);
    for (let x of result) answer += x + " ";
    answer += "\n";
    return;
  }
  for (let i = 1; i <= n; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    selected.push(i);
    solution(depth + 1);
    visited[i] = false;
    selected.pop();
  }
}

solution(0);
console.log(answer);
