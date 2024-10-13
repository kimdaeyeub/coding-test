class PriorityQueue {
  constructor() {
    this.nodes = [];
  }
  enqueue(val, priority) {
    this.nodes.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.nodes.shift();
  }
  sort() {
    this.nodes.sort((a, b) => a.priority - b.priority);
  }
}

class WeightGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex, weight) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(ver1, ver2, weight) {
    this.adjacencyList[ver1].push({ node: ver2, weight });
    this.adjacencyList[ver2].push({ node: ver1, weight });
  }

  Dijkstra(start, finish) {
    const distances = {};
    const nodes = new PriorityQueue();
    const previous = {};
    let path = [];
    let smallest;

    for (let x in this.adjacencyList) {
      if (x === start) {
        distances[x] = 0;
        nodes.enqueue(x, 0);
      } else {
        distances[x] = Infinity;
        nodes.enqueue(x, Infinity);
      }
      previous[x] = null;
    }

    while (nodes.nodes.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        // 반복문 종료 => 반환할 값을 만들어야 함.
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbor];
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            distances[nextNeighbor] = candidate;
            previous[nextNeighbor] = smallest;
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

function solution(graph, start) {
  // WeightGraph 인스턴스 생성
  const weightGraph = new WeightGraph();

  // 그래프의 모든 정점 추가
  for (let vertex in graph) {
    weightGraph.addVertex(vertex);
  }

  // 그래프의 모든 간선 추가
  for (let vertex in graph) {
    for (let neighbor in graph[vertex]) {
      weightGraph.addEdge(vertex, neighbor, graph[vertex][neighbor]);
    }
  }

  // 결과를 저장할 객체
  const result = {};

  // 시작점에서 모든 다른 정점까지의 최단 거리 계산
  for (let vertex in graph) {
    if (vertex !== start) {
      const path = weightGraph.Dijkstra(start, vertex);
      const distance =
        path.length > 0
          ? weightGraph.Dijkstra(start, vertex).length - 1
          : Infinity;
      result[vertex] = distance;
    }
  }

  return result;
}

console.log(solution({ A: { B: 9, C: 3 }, B: { A: 5 }, C: { B: 1 } }, "A"));
