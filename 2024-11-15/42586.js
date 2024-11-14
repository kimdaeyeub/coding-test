function solution(progresses, speeds) {
  let results = [];
  // progress배열이 빌때까지 실행
  let queue = [];
  for (let i = 0; i < progresses.length; i++) {
    queue.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }
  let item = queue.shift();
  let count = 1;
  while (queue.length !== 0) {
    if (item >= queue[0]) {
      queue.shift();
      count++;
    } else {
      results.push(count);
      item = queue.shift();
      count = 1;
    }
  }
  results.push(count);
  return results;
}
