const fs = require("fs");

let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input.shift());
const heights = input.map((line) => line.split(" ").map(Number));

let minHeight = Math.min(...heights.flat());
let maxHeight = Math.max(...heights.flat());

function bfs(visited, startX, startY, height) {
  const queue = [[startX, startY]];
  visited[startY][startX] = true;

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (queue.length > 0) {
    const [x, y] = queue.shift();

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < N &&
        ny < N &&
        !visited[ny][nx] &&
        heights[ny][nx] > height
      ) {
        visited[ny][nx] = true;
        queue.push([nx, ny]);
      }
    }
  }
}

let maxSafeAreas = 0;

for (let i = minHeight - 1; i <= maxHeight; i++) {
  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  let safeAreaCount = 0;

  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      if (!visited[y][x] && heights[y][x] > i) {
        bfs(visited, x, y, i);
        safeAreaCount++;
      }
    }
  }

  maxSafeAreas = Math.max(maxSafeAreas, safeAreaCount);
}

console.log(maxSafeAreas);
