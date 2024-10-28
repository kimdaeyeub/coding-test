function solution(progresses, speeds) {
  var answer = [];
  let condition = true;
  let arr = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index]),
  );

  let count = 0;
  let init = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= init) {
      count++;
    } else {
      answer.push(count);
      count = 1;
      init = arr[i];
    }
  }
  answer.push(count);
  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5])); // [2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); // [1, 3, 2]
