const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const [m, n] = input.shift().split(" ").map(Number);
const graph = input.map((line) => line.split(" ").map(Number));

const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

class Queue {
  constructor() {
    this.queue = [];
    this.head = 0;
    this.tail = 0;
  }

  enqueue(value) {
    this.queue[this.tail] = value;
    this.tail++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.queue[this.head];
    this.head++;
    return value;
  }

  isEmpty() {
    return this.head === this.tail;
  }
}

const queue = new Queue();
let totalTomatoes = 0;
let ripeTomatoes = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (graph[i][j] === 1) {
      queue.enqueue([i, j, 0]);
      ripeTomatoes++;
    }
    if (graph[i][j] !== -1) {
      totalTomatoes++;
    }
  }
}

if (ripeTomatoes === totalTomatoes) {
  console.log(0);
  return;
}

let maxDays = 0;

while (!queue.isEmpty()) {
  const [x, y, days] = queue.dequeue();
  maxDays = days;

  for (const [dx, dy] of directions) {
    const nx = x + dx;
    const ny = y + dy;

    if (nx >= 0 && ny >= 0 && nx < n && ny < m && graph[nx][ny] === 0) {
      graph[nx][ny] = 1;
      queue.enqueue([nx, ny, days + 1]);
      ripeTomatoes++;
    }
  }
}

console.log(ripeTomatoes === totalTomatoes ? maxDays : -1);
