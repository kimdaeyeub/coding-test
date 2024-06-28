function solution(price, money, count) {
  var answer = -1;
  let num = 0;
  for (let i = 1; i <= count; i++) {
    num += price * i;
  }
  answer = num - money;
  if (answer <= 0) {
    return 0;
  }

  return answer;
}
