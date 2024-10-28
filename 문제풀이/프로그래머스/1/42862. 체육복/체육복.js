function solution(n, lost, reserve) {
  let students = new Array(n).fill(1);

  lost.forEach((num) => {
    students[num - 1]--;
  });

  reserve.forEach((num) => {
    students[num - 1]++;
  });

  for (let i = 0; i < n; i++) {
    if (students[i] === 0) {
      if (i > 0 && students[i - 1] === 2) {
        students[i]++;
        students[i - 1]--;
      } else if (i < n - 1 && students[i + 1] === 2) {
        students[i]++;
        students[i + 1]--;
      }
    }
  }

  return students.filter((num) => num > 0).length;
}
