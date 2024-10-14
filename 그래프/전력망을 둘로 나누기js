class Graph {
  constructor() {
    this.values = {};
  }

  addVertex(node) {
    if (!this.values[node]) this.values[node] = [];
  }
  addEdge(vertex1, vertex2) {
    this.addVertex(vertex1);
    this.addVertex(vertex2);
    this.values[vertex1].push(vertex2);
    this.values[vertex2].push(vertex1);
  }
  deleteEdge(v1, v2) {
    this.values[v1] = this.values[v1].filter((item) => item !== v2);
    this.values[v2] = this.values[v2].filter((item) => item !== v1);
  }
}

function bfs(graph, n, node) {
  let visited = new Array(n + 1).fill(false);
  let q = [node];
  visited[node] = true;
  let arr = [node];
  while (q.length) {
    let first = q.shift();
    for (let x of graph[first]) {
      if (visited[x]) continue;
      q.push(x);
      visited[x] = true;
      arr.push(x);
    }
  }
  return Math.abs(arr.length - (n - arr.length));
}

function solution(n, wires) {
  const g = new Graph();
  for (let [v1, v2] of wires) {
    g.addEdge(v1, v2);
  }
  let count = Infinity;
  for (let i = 1; i <= n; i++) {
    for (let x of g.values[i]) {
      g.deleteEdge(i, x);
      let tempCount = bfs(g.values, n, x);
      count = Math.min(tempCount, count);
      g.addEdge(i, x);
    }
  }

  return count;
}

console.log(
  solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ])
); // 3
console.log(
  solution(4, [
    [1, 2],
    [2, 3],
    [3, 4],
  ])
); // 0
console.log(
  solution(7, [
    [1, 2],
    [2, 7],
    [3, 7],
    [3, 4],
    [4, 5],
    [6, 7],
  ])
); //  1
