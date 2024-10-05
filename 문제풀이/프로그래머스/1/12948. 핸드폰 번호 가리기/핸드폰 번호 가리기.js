function solution(phone_number) {
  var answer = "";
  let val = phone_number.split("");
  for (let i = 0; i < val.length - 4; i++) {
    val[i] = "*";
  }
  answer = val.join("");
  return answer;
}
