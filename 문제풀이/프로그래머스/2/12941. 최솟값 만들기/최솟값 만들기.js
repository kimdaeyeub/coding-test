function solution(A, B) {
  var answer = 0;
  B = B.sort((a, b) => a - b);
  A = A.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i];
  }

  return answer;
}
