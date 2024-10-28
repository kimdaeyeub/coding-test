function makeNumbers(nums, visited, depth, maxDepth, selected, arr) {
  if (depth === maxDepth) {
    if (selected.join("") !== "1" && !arr.includes(Number(selected.join("")))) {
      arr.push(Number(selected.join("")));
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (visited[i]) continue;
    if (selected.length === 0 && nums[i] === 0) continue;
    visited[i] = true;
    selected.push(nums[i]);
    makeNumbers(nums, visited, depth + 1, maxDepth, selected, arr);
    visited[i] = false;
    selected.pop();
  }
}

function solution(numbers) {
  var answer = 0;
  const nums = numbers.split("").map(Number);
  let arr = [];
  let selected = [];
  let visited = new Array(10 ^ nums.length).fill(false);

  for (let i = 1; i <= numbers.length; i++) {
    makeNumbers(nums, visited, 0, i, selected, arr);
  }
  for (let x of arr) {
    let count = 0;
    for (let i = 2; i <= x; i++) {
      if (x % i === 0) {
        count++;
      }
    }
    if (count === 1) {
      answer++;
    }
  }
  return answer;
}
