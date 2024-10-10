function createHashTable(arr, target) {
  const lists = new Array(target + 1).fill(0);
  for (let x of arr) {
    if (x >= target) continue;
    lists[x] = 1;
  }
  return lists;
}

function solution(arr, target) {
  const hashTable = createHashTable(arr, target);
  for (let i = 0; i < arr.length - 1; i++) {
    const k = target - arr[i];
    if (hashTable[k] === 1 && k >= 0 && k < target && k !== arr[i]) {
      return true;
    }
  }
  return false;
}

console.log(solution([1, 2, 3, 4, 8], 6)); //true
console.log(solution([2, 3, 5, 9], 10)); //false
