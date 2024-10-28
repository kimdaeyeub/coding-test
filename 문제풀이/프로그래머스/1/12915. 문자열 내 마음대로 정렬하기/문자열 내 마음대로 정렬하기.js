function solution(strings, n) {
  var answer = [];
  strings = strings.map((item) => [item, item[n]]);
  strings = strings.sort((a, b) => {
    if (a[1] > b[1]) {
      return 1;
    } else if (a[1] < b[1]) {
      return -1;
    } else {
      return a > b ? 1 : -1;
    }
  });
  answer = strings.map((item) => item[0]);
  return answer;
}
