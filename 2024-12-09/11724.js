// 6 5
// 1 2
// 2 5
// 5 1
// 3 4
// 4 6

// [[2, 5], [1, 5], [4], [3, 6], [2, 1], [4]];

const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const items = input.map((item) => item.split(" ").map(Number));
let graph = [];
for (let i = 0; i <= N; i++) {
  graph.push([]);
}

for (let i = 0; i < items.length; i++) {
  const [x, y] = items[i];
  graph[x].push(y);
  graph[y].push(x);
}
let visited = new Array(N).fill(false);

function bfs() {
  let queue = [];
  queue.push(1);
  visited[0] = true;
  count = 1;
  while (visited.includes(false)) {
    const item = queue.shift();
    for (let x of graph[item]) {
      if (visited[x - 1]) continue;
      queue.push(x);
      visited[x - 1] = true;
    }

    if (queue.length === 0 && visited.includes(false)) {
      const notVisitedIndex = visited.indexOf(false);
      queue.push(notVisitedIndex + 1);
      visited[notVisitedIndex] = true;
      count++;
    }
  }
  return count;
}

console.log(bfs());
