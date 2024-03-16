const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [r, c] = input[0].split(" ").map(Number);

let arr = [];
for (let i = 1; i <= r; i++) {
  const char = input[i].split("");
  arr[i - 1] = char;
}

let selected = new Set();
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

let maxDepth = 0;
function sol(x, y, depth) {
  maxDepth = Math.max(maxDepth, depth);
  for (let i = 0; i < 4; i++) {
    if (
      x + dx[i] < 0 ||
      y + dy[i] < 0 ||
      x + dx[i] > r - 1 ||
      y + dy[i] > c - 1
    )
      continue;
    if (selected.has(arr[x + dx[i]][y + dy[i]])) continue;
    selected.add(arr[x + dx[i]][y + dy[i]]);
    sol(x + dx[i], y + dy[i], depth + 1);
    selected.delete(arr[x + dx[i]][y + dy[i]]);
  }
}

selected.add(arr[0][0]);
sol(0, 0, 1);
console.log(maxDepth);
