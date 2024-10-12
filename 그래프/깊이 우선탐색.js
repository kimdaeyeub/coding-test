function solution(graph, start) {
  const adjList = {};
  graph.forEach(([s, e]) => {
    if (!adjList[s]) adjList[s] = [];
    adjList[s].push(e);
  });

  function dfs(node, visited, results) {
    results.push(node);
    visited[node] = true;
    (adjList[node] || []).forEach((neighbor) => {
      if (!visited[neighbor]) {
        dfs(neighbor, visited, results);
      }
    });
  }

  let results = [];
  let visited = {};
  dfs(start, visited, results);

  return results;
}

console.log(
  solution(
    [
      ["A", "B"],
      ["B", "C"],
      ["C", "D"],
      ["D", "E"],
    ],
    "A"
  )
); // ["A","B","C","D","E"]
console.log(
  solution(
    [
      ["A", "B"],
      ["A", "C"],
      ["B", "D"],
      ["B", "E"],
      ["C", "F"],
      ["E", "F"],
    ],
    "A"
  )
); //["A","B","D","E","F","C"]
