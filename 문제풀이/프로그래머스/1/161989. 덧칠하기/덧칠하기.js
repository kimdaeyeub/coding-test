function solution(n, m, section) {
  var answer = 0;
  let wall = [];
  for (let i = 1; i <= n; i++) {
    wall.push(i);
  }
  let visited = new Array(n + 1).fill(false);
  for (let i = 0; i < section.length; i++) {
    if (visited[section[section.length - 1]]) break;
    if (visited[section[i]]) continue;
    for (let j = 0; j < m; j++) {
      visited[section[i] + j] = true;
    }
    answer += 1;
  }
  return answer;
}
