const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [M, N, K] = input.shift().split(" ").map(Number);
const arr = input.map((item) => item.split(" ").map(Number));

let graph = [];

for (let i = 0; i < M; i++) {
  graph.push([]);
  for (let j = 0; j < N; j++) {
    graph[i].push(false);
  }
}

for (let [x1, y1, x2, y2] of arr) {
  for (let i = x1; i < x2; i++) {
    for (let j = y1; j < y2; j++) {
      graph[j][i] = true;
    }
  }
}

function bfs(y, x, graph, M, N) {
  let queue = [[x, y]];
  graph[y][x] = true;
  let d = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let width = 1;

  while (queue.length > 0) {
    const [x, y] = queue.shift();
    for (let [dx, dy] of d) {
      const nx = x + dx;
      const ny = y + dy;
      if (nx < 0 || ny < 0 || nx >= N || ny >= M || graph[ny][nx]) continue;
      queue.push([nx, ny]);
      width++;
      graph[ny][nx] = true;
    }
  }
  return width;
}

let count = 0;
let results = [];
for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (!graph[i][j]) {
      count++;
      const width = bfs(i, j, graph, M, N);
      results.push(width);
    }
  }
}
results.sort((a, b) => a - b);
console.log(count);
console.log(results.join(" "));
