function fibo(n, d) {
  if (n === 1) {
    return d[1];
  }
  if (n === 2) {
    return d[2];
  }
  if (d[n] !== 0) {
    return d[n];
  }
  d[n] = (fibo(n - 1, d) + fibo(n - 2, d)) % 1234567;
  return d[n];
}
function solution(n) {
  var answer = 0;
  let d = new Array(n + 1).fill(0);
  d[1] = 1;
  d[2] = 2;
  answer = fibo(n, d);
  return answer;
}
