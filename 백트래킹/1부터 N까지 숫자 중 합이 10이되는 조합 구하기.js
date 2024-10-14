function solution(N) {
  //   let arr = [];
  //   for (let i = 1; i <= N; i++) {
  //     arr.push(i);
  //   }
  let results = [];

  function backtracking(sum, start, selectNumbers) {
    if (sum === 10) {
      results.push(selectNumbers);
      return;
    }
    for (let i = start; i <= N; i++) {
      backtracking(sum + i, i + 1, selectNumbers.concat(i));
    }
  }

  backtracking(0, 1, []);
  return results;
}

console.log(solution(5));
console.log(solution(2));
console.log(solution(7));
