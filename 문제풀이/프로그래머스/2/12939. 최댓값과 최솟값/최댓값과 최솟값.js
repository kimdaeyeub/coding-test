function solution(s) {
  var answer = "";
  let arr = s.split(" ").map(Number);
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  answer = `${min} ${max}`;
  return answer;
}
