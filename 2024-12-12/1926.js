const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// n:세로, m:가로
const [n, m] = input.shift().split(" ").map(Number);
const graph = input.map((item) => item.split(" ").map(Number));

// i:세로, j:가로
function bfs(i, j, visited) {
  let q = [[i, j]];
  visited[i][j] = true;
  let d = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let width = 1;
  while (q.length > 0) {
    const [y, x] = q.shift();
    for (let [dx, dy] of d) {
      const ny = y + dy;
      const nx = x + dx;
      if (
        nx < 0 ||
        ny < 0 ||
        ny >= n ||
        nx >= m ||
        visited[ny][nx] ||
        graph[ny][nx] === 0
      )
        continue;
      q.push([ny, nx]);
      visited[ny][nx] = true;
      width++;
    }
  }
  return width;
}

let visited = [];
for (let i = 0; i < n; i++) {
  visited.push([...new Array(m).fill(false)]);
}

let count = 0;
let maxWidth = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (graph[i][j] === 0 || visited[i][j]) continue;
    const width = bfs(i, j, visited);
    maxWidth = Math.max(maxWidth, width);
    count++;
  }
}
console.log(count);
console.log(maxWidth);
