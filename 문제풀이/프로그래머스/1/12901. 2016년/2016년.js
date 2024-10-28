function solution(a, b) {
  var answer = "";
  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const day = new Date(`2016-${a}-${b}`).getDay();
  answer = week[day];
  return answer;
}
