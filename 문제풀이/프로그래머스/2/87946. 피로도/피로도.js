function scan(visited, depth, selected, k, arr, result, maxDepth) {
  if (depth === maxDepth) {
    let remain = k;
    let ok = true;
    for (let x of selected) {
      if (x[0] <= remain) {
        remain -= x[1];
      } else {
        ok = false;
        break;
      }
    }
    if (ok) {
      // max=Math.max(...result,selected.length)
      result.push(selected.length);
    }
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (visited[i]) continue;
    if (k < arr[i][0]) continue;
    visited[i] = true;
    selected.push(arr[i]);
    scan(visited, depth + 1, selected, k, arr, result, maxDepth);
    visited[i] = false;
    selected.pop();
  }
}

function solution(k, dungeons) {
  var answer = 0;
  let arr = dungeons.filter((item) => item[0] <= k).sort((a, b) => b[0] - a[0]);

  let selected = [];
  let result = [];
  let visited = new Array(arr.length).fill(false);
  for (let i = 1; i <= arr.length; i++) {
    scan(visited, 0, selected, k, arr, result, i);
  }
  console.log(result);
  answer = Math.max(...result);
  return answer;
}
