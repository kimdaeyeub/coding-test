const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const lectures = input[1].split(" ").map(Number);

function isPossible(lectures, M, mid) {
  let count = 1;
  let sum = 0;
  for (let i = 0; i < lectures.length; i++) {
    if (sum + lectures[i] > mid) {
      count++;
      sum = 0;
    }
    sum += lectures[i];
  }
  return count <= M;
}

function binarySearch(lectures, M) {
  let left = Math.max(...lectures);
  let right = lectures.reduce((acc, cur) => acc + cur, 0);
  let answer = right;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (isPossible(lectures, M, mid)) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return answer;
}

console.log(binarySearch(lectures, M));
