const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

let arr = new Array(n + 1).fill(false);
let temp = [];

function solution(depth) {
  if (depth === m) {
    console.log(temp.join(" "));
    return;
  }
  for (let i = 1; i <= n; i++) {
    if (arr[i]) continue;
    arr[i] = true;
    temp.push(i);
    solution(depth + 1);
    arr[i] = false;
    temp.pop();
  }
}

solution(0);
