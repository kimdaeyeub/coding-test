function dfs(depth, arr, selected, visited, result, start) {
  if (depth === 3) {
    let sum = selected.reduce((a, b) => a + b);
    if (sum === 0) {
      result.push([...selected]);
    }
    return;
  }

  for (let i = start; i < arr.length; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    selected.push(arr[i]);
    dfs(depth + 1, arr, selected, visited, result, i);
    visited[i] = false;
    selected.pop();
  }
}

function solution(number) {
  var answer = 0;
  let selected = [];
  let result = [];
  let visited = new Array(number.length).fill(false);
  dfs(0, number, selected, visited, result, 0);
  answer = result.length;
  return answer;
}
