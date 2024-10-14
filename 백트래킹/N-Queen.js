function solution(n) {
  let queue = [];
  let visited = [];

  function isValid(x, y) {
    for (let [x1, y1] of queue) {
      if (x1 === x || y1 === y || Math.abs(x1 - x) === Math.abs(y1 - y)) {
        return false;
      }
    }
    return true;
  }
  let result = [];

  function dfs(row) {
    if (queue.length === n) {
      result.push(queue);
      return;
    }
    for (let i = 0; i < n; i++) {
      if (visited[i] || !isValid(i, row)) continue;
      queue.push([i, row]);
      dfs(row + 1);
      queue.pop();
    }
  }

  dfs(0, 1, n);
  return result.length;
}

console.log(solution(4));
