const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const n = Number(input[0]);

let graph = [new Array(n + 1).fill(1e9)];

for (let i = 1; i <= n; i++) {
  const data = input[i].split("");
  graph.push(new Array(n + 1).fill(1e9));
  for (let x = 0; x < n; x++) {
    if (data[x] === "Y") {
      graph[i][x + 1] = 1;
    }
  }
}
for (let i = 1; i <= n; i++) graph[i][i] = 0;

for (let k = 1; k <= n; k++) {
  for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
      let cost = graph[a][k] + graph[k][b];
      if (graph[a][b] > cost) {
        graph[a][b] = cost;
      }
    }
  }
}

let result = new Array(n + 1).fill(0);
for (let a = 1; a <= n; a++) {
  for (let b = 1; b <= n; b++) {
    if (a !== b && graph[a][b] <= 2) result[a] += 1;
  }
}
console.log(Math.max(...result));
