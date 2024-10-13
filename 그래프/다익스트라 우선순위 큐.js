class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(node, distance) {
    this.values.push({ node, distance });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.distance - b.distance);
  }
}

function solution(graph, start) {
  let distances = {};
  let previous = {};
  const pq = new PriorityQueue();
  let smallest;

  for (let x in graph) {
    distances[x] = Infinity;
    previous[x] = null;
  }

  distances[start] = 0;
  pq.enqueue(start, 0); //"A"

  while (pq.values.length) {
    smallest = pq.dequeue().node; //{node:"A",distance:0}

    for (let x in graph[smallest]) {
      //x :{ B: 9, C: 3 }, smallest:"A"
      const cost = distances[smallest] + graph[smallest][x];
      if (cost < distances[x]) {
        pq.enqueue(x, cost);
        distances[x] = cost;
        previous[x] = smallest;
      }
    }
  }
  const road = {};
  for (let x in previous) {
    if (!road[x]) road[x] = [x];
    let pre = x;

    while (pre !== start) {
      road[x].unshift(previous[pre]);
      pre = previous[pre];
    }
  }

  return [distances, road];
}

console.log(solution({ A: { B: 9, C: 3 }, B: { A: 5 }, C: { B: 1 } }, "A"));
console.log(solution({ A: { B: 1 }, B: { C: 5 }, C: { D: 1 }, D: {} }, "A"));
// [{'A': 0, 'B': 1, 'C': 6, 'D': 7}, {'A': ['A'], 'B': ['A', 'B'], 'C': ['A', 'B', 'C'], 'D': ['A', 'B', 'C', 'D']}]
