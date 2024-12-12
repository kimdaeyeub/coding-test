const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

let graph = [];

for (let i = 0; i <= N; i++) {
  graph.push([]);
}

let arr = input.map((item) => item.split(" ").map(Number));

for (let [x, y] of arr) {
  graph[x].push(y);
  graph[y].push(x);
}

function bfs(i, end, graph, visited) {
  let q = [[i, 0]];
  visited[i] = true;
  while (q.length > 0) {
    const [a, b] = q.shift();
    for (let x of graph[a]) {
      if (x === end) return b + 1;
      if (visited[x]) continue;
      q.push([x, b + 1]);
      visited[x] = true;
    }
  }
}

let results = [];
for (let i = 1; i <= N; i++) {
  let count = 0;
  for (let j = 1; j <= N; j++) {
    if (i === j) continue;
    let visited = new Array(N + 1).fill(false);
    count += bfs(i, j, graph, visited);
    // console.log(count, i, j);
  }
  results.push([i, count]);
}

results.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
});

console.log(results[0][0]);
