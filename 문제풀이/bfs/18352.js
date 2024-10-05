class Queue {
  constructor() {
    this.headIndex = 0;
    this.tailIndex = 0;
    this.items = {};
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

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, m, k, x] = input[0].split(" ").map(Number);

let graph = [];
for (let i = 0; i <= n; i++) graph[i] = [];
for (let i = 1; i <= m; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
}

let visited = new Array(n + 1).fill(-1); // 변경: 방문 배열을 -1로 초기화

let result = [];
const bfs = (x, visited, graph) => {
  const q = new Queue();
  q.enqueue(x);
  visited[x] = 0; // 변경: 시작 노드의 거리를 0으로 설정

  while (q.getLength() > 0) {
    const cur = q.dequeue();
    for (let i = 0; i < graph[cur].length; i++) {
      const next = graph[cur][i];
      if (visited[next] === -1) {
        // 변경: 중복 방문 체크
        visited[next] = visited[cur] + 1;
        q.enqueue(next);
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    // 변경: 거리가 k인 노드 찾기
    if (visited[i] === k) {
      result.push(i);
    }
  }
};

bfs(x, visited, graph);
result.sort((a, b) => a - b); // 변경: 결과 배열을 오름차순으로 정렬

if (result.length === 0) {
  console.log(-1);
} else {
  const str = result.join(" ");
  console.log(str);
}
