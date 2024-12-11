function solution(n, left, right) {
  const leftRange = Math.floor(left / n);
  const rightRange = Math.floor(right / n);
  const value = right - left;
  left = left % n;
  right = left + value;
  // i: 0 ~ 1
  let arr = [];
  for (let i = leftRange; i <= rightRange; i++) {
    for (let j = 0; j < n; j++) {
      if (j <= i) {
        arr.push(i + 1);
      } else {
        arr.push(j + 1);
      }
    }
  }

  return arr.slice(left, right + 1);
}

console.log(solution(3, 2, 5)); // [3,2,2,3]
console.log(solution(4, 7, 14)); // [4,3,3,3,4,4,4,4]
