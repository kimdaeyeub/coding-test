function solution(N, A, B) {
  let groupA = Math.ceil(A / 2);
  let groupB = Math.ceil(B / 2);
  let count = 1;
  while (groupA !== groupB) {
    groupA = Math.ceil(groupA / 2);
    groupB = Math.ceil(groupB / 2);
    count += 1;
  }
  return count;
}

console.log(solution(10, 3, 7));
