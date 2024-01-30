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

const n = Number(input[0]);
const m = Number(input[1]);

let graph = [];
for (let i = 0; i <= n; i++) graph[i] = [];
for (let i = 2; i <= m + 1; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

let visited = new Array(n + 1).fill(-1);

function bfs(x) {
  const q = new Queue();
  q.enqueue(x);
  visited[x] = 0;
  while (q.getLength() > 0) {
    const cur = q.dequeue();
    for (let i of graph[cur]) {
      if (visited[i] === -1) {
        visited[i] = visited[cur] + 1;
        q.enqueue(i);
      }
    }
  }
}

let count = 0;
bfs(1);
for (let i = 0; i <= n; i++) {
  if (visited[i] > 0 && visited[i] <= 2) {
    count += 1;
  }
}
console.log(count);
