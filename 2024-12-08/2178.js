const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [n, m] = input.shift().split(" ");
const graph = input.map((item) => item.split("").map(Number));
let visited = Array.from({ length: n }, () => {
  return Array.from({ length: m }, () => false);
});

const d = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

function validatePath(x, y) {
  if (x < 0 || y < 0 || x >= m || y >= n || graph[y][x] === 0) {
    return false;
  }
  return true;
}

function bfs() {
  let queue = [];
  //[x,y,distance]
  queue.push([0, 0, 1]);

  visited[0][0] = true;
  while (queue.length > 0) {
    const [x, y, distance] = queue.shift();
    for (let i = 0; i < 4; i++) {
      let dx = d[i][0] + x;
      let dy = d[i][1] + y;
      if (dx === m - 1 && dy === n - 1) {
        return distance + 1;
      }
      if (validatePath(dx, dy) && !visited[dy][dx]) {
        queue.push([dx, dy, distance + 1]);
        visited[dy][dx] = true;
      }
    }
  }
}

console.log(bfs());
