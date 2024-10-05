function solution(k, m, score) {
  var answer = 0;
  score = score.sort((a, b) => b - a);
  for (let i = 1; i <= Math.floor(score.length / m); i++) {
    let value = score[i * m - 1];
    if (value > k) {
      answer += k * m;
    } else {
      answer += value * m;
    }
  }
  return answer;
}