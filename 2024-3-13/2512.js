const fs = require("fs");
let [N, requests, M] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
N = parseInt(N);
requests = requests.split(" ").map(Number);
M = parseInt(M);

let start = 0;
let end = Math.max(...requests);

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let sum = requests.reduce((acc, cur) => acc + (cur > mid ? mid : cur), 0);

  if (sum > M) {
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}

console.log(end);
