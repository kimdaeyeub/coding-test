const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

let selected = [];
let answer = "";
function sol(arr, depth, m) {
  if (depth === m) {
    answer += selected.join(" ") + "\n";
    return;
  }
  for (let i = 1; i <= n; i++) {
    selected.push(i);
    sol(arr, depth + 1, m);
    selected.pop();
  }
}
let arr = [];
for (let i = 0; i <= n; i++) arr.push(i);
sol(arr, 0, m);
console.log(answer);
