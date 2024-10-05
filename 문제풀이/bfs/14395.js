const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const [s, t] = input[0].split(" ").map(Number);

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

  isEmpty() {
    return this.headIndex === this.tailIndex;
  }
}

const bfs = () => {
  if (s === t) return "0";
  let q = new Queue();
  let visited = new Map();
  q.enqueue({ value: s, path: "" });

  while (!q.isEmpty()) {
    let { value, path } = q.dequeue();

    if (value === t) {
      return path;
    }

    for (let x of ["*", "+", "-", "/"]) {
      let nextVal;
      if (x === "*" && value !== 0) {
        nextVal = value * value;
      } else if (x === "+") {
        nextVal = value + value;
      } else if (x === "-" && value !== 0) {
        nextVal = 0;
      } else if (x === "/" && value !== 0) {
        nextVal = 1;
      } else {
        continue;
      }

      if (nextVal > t || visited.has(nextVal)) continue;

      visited.set(nextVal, true);
      q.enqueue({ value: nextVal, path: path + x });
    }
  }

  return "-1";
};

console.log(bfs());
