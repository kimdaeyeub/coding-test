function solution(d, budget) {
  let sum = d.reduce((a, b) => a + b);
  if (sum <= budget) {
    return d.length;
  }
  d = d.sort((a, b) => a - b);
  while (d.length !== 0) {
    let max = d.pop();
    sum = sum - max;

    if (sum <= budget) {
      return d.length;
    }
  }
}
