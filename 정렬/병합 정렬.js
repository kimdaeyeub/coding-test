function solution(arr1, arr2) {
  let point1 = 0;
  let point2 = 0;
  let result = [];

  while (point1 !== arr1.length || point2 !== arr2.length) {
    const val1 = arr1[point1] ?? Infinity;
    const val2 = arr2[point2] ?? Infinity;
    if (val1 > val2) {
      result.push(val2);
      point2 += 1;
    } else {
      result.push(val1);
      point1 += 1;
    }
  }
  return result;
}

console.log(solution([1, 3, 5], [2, 4, 6]));
console.log(solution([1, 2, 3], [4, 5, 6]));
