const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const node = Number(input[0]);
const line = Number(input[1]);

let graph = [[]];
for (let i = 1; i <= node; i++) graph[i] = [];

for (let i = 2; i < input.length; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

const visited = new Array(node + 1).fill(false);

let count = 0;
function dfs(graph, v, visited) {
  visited[v] = true;

  for (let i of graph[v]) {
    if (!visited[i]) {
      dfs(graph, i, visited);
      count += 1;
    }
  }
}
dfs(graph, 1, visited);

console.log(count);
