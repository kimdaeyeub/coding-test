const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let [n, k] = input[0].split(" ").map(Number);

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
    const item = this.items[this.headIndex];
    return item;
  }

  getLength() {
    const leng = this.tailIndex - this.headIndex;
    return leng;
  }
}

const MAX = 100001;
let visited = new Array(MAX).fill(0);
function bfs() {
  const queue = new Queue();
  queue.enqueue(n);
  while (queue.getLength !== 0) {
    const cur = queue.dequeue();
    if (k === cur) {
      return visited[cur];
    }
    for (let next of [cur - 1, cur + 1, 2 * cur]) {
      if (next < 0 || next > MAX) continue;
      if (visited[next] === 0) {
        visited[next] = visited[cur] + 1;
        queue.enqueue(next);
      }
    }
  }
}

console.log(bfs());
