function solution(k, tangerine) {
  let obj = {};
  for (let x of tangerine) {
    if (obj[x]) {
      obj[x] += 1;
    } else {
      obj[x] = 1;
    }
  }
  let arr = Object.values(obj).sort((a, b) => b - a);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (k <= 0) {
      break;
    }
    count += 1;
    k -= arr[i];
  }
  return count;
}