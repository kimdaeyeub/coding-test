class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(node, hour) {
    this.values.push({ node, hour });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.hour - b.hour);
  }
}

// 큐의 내부에는 {node:1,hour:2} 형식
// road [1,2,3] => 1번과 2번 마을이 연결되어있고 3시간이 걸린다.
function solution(N, road, K) {
  let previous = {};
  let hours = {};
  let smallest;
  const q = new PriorityQueue();

  let graph = {};

  for (let [x, y, hour] of road) {
    if (!graph[x]) graph[x] = {};
    if (!graph[y]) graph[y] = {};
    if (graph[x][y]) {
      graph[x][y] = Math.min(graph[x][y], hour);
      graph[y][x] = Math.min(graph[y][x], hour);
    } else {
      graph[x][y] = hour;
      graph[y][x] = hour;
    }
  }

  for (let i = 1; i <= N; i++) {
    if (i === 1) {
      previous[i] = i;
      hours[i] = 0;
    } else {
      previous[i] = null;
      hours[i] = Infinity;
    }
  }

  q.enqueue(1, 0);
  while (q.values.length) {
    smallest = q.dequeue().node;
    for (let x in graph[smallest]) {
      const newHours = hours[smallest] + graph[smallest][x];
      if (newHours < hours[x]) {
        hours[x] = newHours;
        previous[x] = smallest;
        q.enqueue(x, newHours);
      }
    }
  }
  let count = 0;
  console.log(hours);
  for (let x in hours) {
    if (hours[x] <= K) count++;
  }
  return count;
}

// N개의 마을에서 K시간이하로 배달할 수 있는 마을을 구하기
// road는 그래프
// 1번 마을에 있는 음식점이 K 이하의 시간에 배달이 가능한 마을의 개수를 return 하면 됩니다.

console.log(
  solution(
    5,
    [
      [1, 2, 1],
      [2, 3, 3],
      [5, 2, 2],
      [1, 4, 2],
      [5, 3, 1],
      [5, 4, 2],
    ],
    3,
  ),
); //4
console.log(
  solution(
    6,
    [
      [1, 2, 1],
      [1, 3, 2],
      [2, 3, 2],
      [3, 4, 3],
      [3, 5, 2],
      [3, 5, 3],
      [5, 6, 1],
    ],
    4,
  ),
); //4
