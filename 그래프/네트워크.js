function solution(n, computers) {
  const visited = new Array(n).fill(false);
  const q = [];
  q.push(0);
  let count = 1;
  visited[0] = true;
  while (visited.includes(false)) {
    if (q.length === 0) {
      count += 1;
      q.push(visited.indexOf(false));
      visited[visited.indexOf(false)] = true;
    }
    const last = q.shift(); //0
    for (let i = 0; i < computers.length; i++) {
      if (visited[i]) continue;
      if (computers[last][i] === 1 && i !== last) {
        visited[i] = true;
        q.push(i);
      }
    }
  }
  return count;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
); // 2
console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ])
); // 1
