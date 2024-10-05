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

  getLength() {
    return this.tailIndex - this.headIndex;
  }
}
const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [n, k, m] = input[0].split(" ").map(Number);

let visited = new Array(n + 1).fill(-1);
let graph = [];

for (let i = 0; i <= n; i++) {
  graph[i] = new Set();
}

for (let i = 1; i <= m; i++) {
  const data = input[i].split(" ").map(Number);
  for (let x of data) {
    // graph[x].add(data);
    data.map((item) => {
      if (x < item) {
        graph[x].add(item);
      }
    });
  }
}
// console.log(graph);

function bfs() {
  const q = new Queue();
  q.enqueue(1);
  visited[1] = 1;
  while (q.getLength() > 0) {
    const cur = q.dequeue();
    if (cur === n) {
      return visited[cur];
    }
    if (graph[cur].size !== 0) {
      for (let x of graph[cur]) {
        if (visited[x] <= -1) {
          visited[x] = visited[cur] + 1;
          q.enqueue(x);
        }
      }
    }
  }
}
console.log(bfs());
