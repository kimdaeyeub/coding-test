const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const graph = input.map((item) => item.split(" ").map(Number));

let visited = [];
let arr = [];
for (let i = 0; i < n; i++) {
  visited.push([...new Array(m).fill(false)]);
  arr.push(
    graph[i].map((cell) => (cell === 1 ? -1 : 0)) // 갈 수 있는 땅은 -1로 초기화
  );
}

function findTwo() {
  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph[0].length; j++) {
      if (graph[i][j] === 2) return [i, j];
    }
  }
}

function bfs(startH, startW) {
  let q = [[startH, startW, 0]];
  visited[startH][startW] = true;
  let d = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (q.length > 0) {
    const [h, w, count] = q.shift();
    for (let [dh, dw] of d) {
      const nh = dh + h;
      const nw = dw + w;
      if (
        nh < 0 ||
        nw < 0 ||
        nh >= n ||
        nw >= m ||
        visited[nh][nw] ||
        graph[nh][nw] === 0
      )
        continue;

      q.push([nh, nw, count + 1]);
      arr[nh][nw] = count + 1;
      visited[nh][nw] = true;
    }
  }
}

const [h, w] = findTwo();
bfs(h, w);
arr[h][w] = 0; // 목표 지점은 거리가 항상 0

let answer = "";
for (let i = 0; i < arr.length; i++) {
  answer += arr[i].join(" ") + "\n";
}

console.log(answer);
