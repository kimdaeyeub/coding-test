function countUniqueValues(arr) {
  // add whatever parameters you deem necessary - good luck!
  let i = 0;

  let count = 1;

  if (arr.length === 0) {
    return 0;
  }
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i = j;
      count += 1;
    }
  }

  return count;
}

console.log(countUniqueValues([-2, -1, -1, 0, 1]));
