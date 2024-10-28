const fs = require("fs");

const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
let selected = [];
let visited = new Array(input.length).fill(false);
let results = [];

function solution(arr, depth, start) {
  if (depth === 7) {
    const sum = selected.reduce((a, b) => a + b);
    if (sum === 100) {
      results.push([...selected]);
    }
    return;
  }
  for (let i = start; i < arr.length; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    selected.push(arr[i]);
    solution(arr, depth + 1, i + 1);
    visited[i] = false;
    selected.pop();
  }
}
solution(input, 0, 0);
results = results[0].sort((a, b) => a - b);

for (let x of results) {
  console.log(x);
}
