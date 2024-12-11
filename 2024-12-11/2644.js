const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const n = Number(input.shift()); // 총 사람 수
const [a, b] = input.shift().split(" ").map(Number); // 두 사람
const m = Number(input.shift()); // 관계 개수
const relations = input.map((line) => line.split(" ").map(Number));

const graph = Array.from({ length: n + 1 }, () => []);

// 그래프 생성 (양방향)
for (const [x, y] of relations) {
  graph[x].push(y);
  graph[y].push(x);
}

// BFS를 사용한 최단 거리 탐색
function bfs(start, target) {
  const visited = Array(n + 1).fill(false);
  const queue = [[start, 0]]; // [현재 노드, 현재 촌수]

  visited[start] = true;

  while (queue.length > 0) {
    const [current, distance] = queue.shift();

    if (current === target) return distance; // 목표 노드에 도달

    for (const neighbor of graph[current]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push([neighbor, distance + 1]);
      }
    }
  }

  return -1; // 연결되지 않은 경우
}

const result = bfs(a, b);
console.log(result);
