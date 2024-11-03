const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);

let graph = Array.from({ length: 100 }, () => Array(100).fill(0));

for (let i = 1; i < input.length; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  for (let j = 0; j < 10; j++) {
    for (let k = 0; k < 10; k++) {
      graph[y + j][x + k] = 1;
    }
  }
}

let count = 0;
for (let i = 0; i < graph.length; i++) {
  for (let j = 0; j < graph.length; j++) {
    if (graph[i][j] === 1) count += 1;
  }
}

console.log(count);
