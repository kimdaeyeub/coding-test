function solution(N, A, B) {
  let count = 0;
  while (A !== B) {
    A = Math.ceil(A / 2);
    B = Math.ceil(B / 2);
    count++;
  }
  return count;
}

console.log(solution(8, 1, 3)); //3

// 1 8
// 1 4 6 8
// 1 2 3 4 5 6 7 8
// 1 4 6 7
// 4 7
