function solution(arr) {
  arr = arr.sort((a, b) => a - b);
  let value = arr[arr.length - 1];
  for (let i = arr.length - 2; i >= 0; i--) {
    let count = 1;
    while (true) {
      if ((value * count) % arr[i] === 0) {
        value = value * count;
        break;
      } else {
        count++;
      }
    }
  }
  return value;
}

console.log(solution([2, 6, 8, 14])); // 168
console.log(solution([1, 2, 3])); // 6
