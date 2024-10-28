function solution(numbers) {
  var answer = [];
  let set = new Set();
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i === j) continue;
      let sum = numbers[i] + numbers[j];
      if (!answer.includes(sum)) {
        answer.push(sum);
      }
    }
  }
  answer = answer.sort((a, b) => a - b);
  return answer;
}
