function bfs(graph, start, visited, selected) {
  let queue = [];
  queue.push(start);
  visited[start] = true;
  selected.push(start);
  while (queue.length !== 0) {
    const deq = queue.shift();
    for (let x of graph[deq]) {
      if (!visited[x]) {
        queue.push(x);
        visited[x] = true;
        selected.push(x);
      }
    }
  }
}

function solution(n, computers) {
  var answer = 0;
  let graph = [];
  for (let i = 0; i <= computers.length; i++) graph[i] = [];
  for (let i = 0; i < computers.length; i++) {
    for (let j = 0; j < computers.length; j++) {
      if (i === j) continue;
      if (computers[i][j] === 1) graph[i + 1].push(j + 1);
    }
  }
  let visited = new Array(computers.length).fill(false);

  let result = [];
  for (let i = 1; i < graph.length; i++) {
    if (visited[i]) continue;
    let selected = [];
    bfs(graph, i, visited, selected);
    result.push(selected);
  }
  answer = result.length;
  return answer;
}
