function solution(s) {
  var answer = "";
  let val = s.split("");
  let big = [];
  let small = [];
  for (let i = 0; i < val.length; i++) {
    if (val[i] === val[i].toUpperCase()) {
      big.push(val[i]);
    } else {
      small.push(val[i]);
    }
  }
  small
    .sort()
    .reverse()
    .map((item) => (answer += item));
  big
    .sort()
    .reverse()
    .map((item) => (answer += item));

  return answer;
}
