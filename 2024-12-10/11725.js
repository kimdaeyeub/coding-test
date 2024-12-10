// 7
// 1 6
// 6 3
// 3 5
// 4 1
// 2 4
// 4 7

class Queue {
  constructor() {
    this.items = {};
    this.tail = 0;
    this.head = 0;
  }

  enqueue(item) {
    this.items[this.tail] = item;
    this.tail++;
  }

  dequeue() {
    const item = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return item;
  }

  getLength() {
    return this.tail - this.head;
  }
}

const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input.shift());

let graph = [];
for (let i = 0; i <= N; i++) {
  graph.push([]);
}

let visited = new Array(N).fill(false);

for (let i = 0; i < input.length; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

function bfs() {
  const queue = new Queue();
  let result = new Array(N - 1);
  queue.enqueue(1);
  visited[0] = true;

  while (queue.getLength() !== 0) {
    const item = queue.dequeue();
    for (let x of graph[item]) {
      if (visited[x - 1]) continue;
      visited[x - 1] = true;
      result[x - 2] = item;
      queue.enqueue(x);
    }
  }
  return result;
}

const results = bfs();
let answer = "";
for (let x of results) {
  answer += x + "\n";
}
console.log(answer);
