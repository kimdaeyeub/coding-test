const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let testCase = Number(input[0]);

class Queue {
  constructor() {
    this.items = {};
    this.tailIndex = 0;
    this.headIndex = 0;
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
    return this.tailIndex - this.headIndex;
  }
}

const dx = [-2, -2, -1, -1, 1, 1, 2, 2]; // 이동할 여덟 가지 방향 정의
const dy = [-1, 1, -2, 2, -2, 2, -1, 1];
let visited = [];
function bfs(x, y, goalX, goalY, max) {
  const queue = new Queue();
  queue.enqueue([x, y]);
  visited[x][y] = 1;
  while (queue.getLength() !== 0) {
    const [curX, curY] = queue.dequeue();
    if (curX === goalX && curY === goalY) {
      return visited[x][y];
    }
    for (let i = 0; i < 8; i++) {
      let nx = curX + dx[i];
      let ny = curY + dy[i];
      if (nx < 0 || ny < 0 || nx >= max || ny >= max) continue;
      if (visited[nx][ny] === 0) {
        visited[nx][ny] = visited[curX][curY] + 1;
        queue.enqueue([nx, ny]);
      }
    }
  }
}

let line = 1;
while (testCase--) {
  let max = Number(input[line]);
  for (let i = 0; i <= max; i++) visited[i] = new Array(max + 1).fill(0);

  const [x, y] = input[line + 1].split(" ").map(Number);
  const [goalX, goalY] = input[line + 2].split(" ").map(Number);

  bfs(x, y, goalX, goalY, max);
  console.log(visited[goalX][goalY] - 1);
  line += 3;
}
