function solution(t, p) {
  var answer = 0;
  let pLength = p.length;
  let result = [];
  for (let i = 0; i < t.length - pLength + 1; i++) {
    let temp = [];
    for (let j = i; j < i + pLength; j++) {
      temp.push(t[j]);
    }
    let str = temp.join("");
    result.push(Number(str));
  }
  p = Number(p);
  result = result.filter((item) => item <= p);
  answer = result.length;
  return answer;
}
