const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const n = Number(input[0]);
const a = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const m = Number(input[2]);
const b = input[3].split(" ").map(Number);

function solution(target, arr, start, end) {
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] === target) return 1;
    else if (arr[mid] > target) end = mid - 1;
    else start = mid + 1;
  }
  return 0;
}

const result = b.map((v) => solution(v, a, 0, n - 1));

console.log(result.join("\n"));
