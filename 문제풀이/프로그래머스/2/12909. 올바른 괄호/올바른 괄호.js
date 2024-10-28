function solution(s) {
  let answer = true;
  let arr = s.split("");
  let list = [];
  let val = 0;
  arr.map((item, index) => {
    if (item === "(") {
      val += 1;
    } else {
      val -= 1;
    }
    list.push(val);
  });

  for (let i = 0; i < list.length; i++) {
    if (list[list.length - 1] !== 0) {
      answer = false;
    }
    if (list[i] < 0) {
      answer = false;
      break;
    }
  }

  return answer;
}
