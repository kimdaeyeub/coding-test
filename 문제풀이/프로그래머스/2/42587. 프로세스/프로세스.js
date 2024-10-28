function solution(priorities, location) {
  let arr = [];
  for (let i = 0; i < priorities.length; i++) {
    if (i === location) {
      arr[i] = [priorities[i], true];
    } else {
      arr[i] = [priorities[i], false];
    }
  }
  let count = 0;
  while (arr.length !== 0) {
    let max = Math.max(...arr.map((item) => item[0]));
    let start = arr.shift();
    if (start[0] !== max) {
      arr.push(start);
    } else {
      count++;
      if (start[1]) {
        return count;
      }
    }
  }
}
