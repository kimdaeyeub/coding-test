function dfs(depth, arr, selected, visited, result, start) {
  if (depth === 3) {
    let sum = selected.reduce((a, b) => a + b);
    let value = true;
    for (let i = 2; i < sum; i++) {
      if (sum % i === 0) {
        value = false;
        break;
      }
    }
    if (value) result.push(sum);
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

function solution(nums) {
  var answer = -1;
  let selected = [];
  let result = [];
  let visited = new Array(nums.length).fill(false);
  dfs(0, nums, selected, visited, result, 0);
  answer = result.length;
  return answer;
}