function solution(graph, start) {
  const adjList = {};
  for (let [s, e] of graph) {
    if (!adjList[s]) adjList[s] = [];
    adjList[s].push(e);
  }

  const visited = new Set();
  let results = [start];
  const queue = [start];
  visited.add(start);

  while (queue.length > 0) {
    const node = queue.shift();
    if (!adjList[node]) continue;
    for (let x of adjList[node]) {
      if (!visited.has(x)) {
        visited.add(x);
        results.push(x);
        queue.push(x);
      }
    }
  }

  return results;
}

console.log(
  solution(
    [
      [1, 2],
      [1, 3],
      [2, 4],
      [2, 5],
      [3, 6],
      [3, 7],
      [4, 8],
      [5, 8],
      [6, 9],
      [7, 9],
    ],
    1,
  ),
); // 반환값 :[1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(
  solution(
    [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 0],
    ],
    1,
  ),
); // 반환값 : [1, 2, 3, 4, 5, 0]
