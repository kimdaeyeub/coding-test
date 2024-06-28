function solution(left, right) {
  var answer = 0;
  let arr = [];
  for (let i = left; i <= right; i++) {
    arr.push(i);
  }
  let minus = [];
  let plus = [];
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    let count = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        count++;
      }
    }
    if (count % 2 === 0) {
      plus.push(num);
    } else {
      minus.push(num);
    }
  }
  answer = plus.reduce((a, b) => a + b) - minus.reduce((a, b) => a + b);
  return answer;
}
