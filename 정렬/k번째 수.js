function solution(array, commands) {
  const results = [];
  for (let [i, j, k] of commands) {
    let slice = array.slice(i - 1, j);
    slice = slice.sort((a, b) => a - b);
    results.push(slice[k - 1]);
  }
  return results;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
); // [5,6,3]
