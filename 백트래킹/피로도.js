function backtracking(arr, visited, k, results, count) {
  for (let i = 0; i < arr.length; i++) {
    if (visited[i] || arr[i][0] > k) continue;
    visited[i] = true;
    backtracking(arr, visited, k - arr[i][1], results, count + 1);
    visited[i] = false;
  }
  results.push(count);
  return;
}

function solution(k, dungeons) {
  const results = [];
  let visited = new Array(dungeons.length).fill(false);
  backtracking(dungeons, visited, k, results, 0);
  return Math.max(...results);
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
); //3
