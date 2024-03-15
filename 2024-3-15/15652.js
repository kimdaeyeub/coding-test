const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

let arr = [];
for (let i = 0; i <= n; i++) arr.push(i);
let selected = [];
let answer = "";

function sol(depth) {
  if (depth === m) {
    answer += selected.join(" ") + "\n";
    return;
  }
  for (let i = 1; i <= n; i++) {
    if (selected.length !== 0 && selected[selected.length - 1] > i) continue;
    selected.push(i);
    sol(depth + 1);
    selected.pop();
  }
}

sol(0);
console.log(answer);
