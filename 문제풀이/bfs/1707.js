const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }

  peek() {
    return this.items[this.headIndex];
  }

  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

let testCase = Number(input[0]);

function bfs(x, visited, graph) {
  const q = new Queue();
  q.enqueue(x);
  visited[x] = 0;
  while (q.getLength() !== 0) {
    data = q.dequeue();
    for (let y of graph[data]) {
      if (visited[y] === -1) {
        visited[y] = 1 - visited[data];
        q.enqueue(y);
      }
    }
  }
}

let line = 1;
while (testCase--) {
  const [v, e] = input[line].split(" ").map(Number);
  let graph = [];
  for (let i = 1; i <= v; i++) graph[i] = [];

  for (let i = 1; i <= e; i++) {
    const [x, y] = input[line + i].split(" ").map(Number);
    graph[x].push(y);
    graph[y].push(x);
  }

  let visited = new Array(v + 1).fill(-1);

  for (let i = 1; i <= v; i++) {
    if (visited[i] === -1) {
      bfs(i, visited, graph);
    }
  }

  if (trueOrFalse(visited, graph)) {
    console.log("YES");
  } else {
    console.log("NO");
  }
  line += e + 1;
}

function trueOrFalse(visited, graph) {
  for (let i = 1; i < visited.length; i++) {
    for (let y of graph[i]) {
      if (visited[y] === visited[i]) return false;
    }
  }
  return true;
}
