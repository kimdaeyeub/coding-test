function solution(s) {
  var answer = "";
  let arr = s.split("");
  if (arr.length % 2 === 0) {
    const num = arr.length / 2;
    answer += arr[num - 1] + arr[num];
  } else {
    const num = Math.floor(arr.length / 2);
    answer += arr[num];
  }
  return answer;
}
