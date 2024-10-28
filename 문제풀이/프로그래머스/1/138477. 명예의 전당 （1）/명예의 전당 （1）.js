function solution(k, score) {
  var answer = [];
  let top = [];
  for (let i = 0; i < score.length; i++) {
    top.push(score[i]);
    top = top.sort((a, b) => a - b);
    if (top.length > k) {
      top.shift();
    }
    answer.push(top[0]);
  }
  return answer;
}
// 10 => 10
// 10 100 => 10
// 10 100 20 => 10
// 100 20 150 => 20
// 100 20 150 => 20
// 100 100 150 => 100
// 100 150 200 => 100
