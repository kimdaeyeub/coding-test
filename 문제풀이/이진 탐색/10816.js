const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
const m = Number(input[2]);
const arr2 = input[3].split(" ").map(Number);

arr = arr.sort((a, b) => a - b);

function upperBound(arr, target) {
  let start = 0;
  let end = arr.length;
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] > target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return end;
}

function lowerBound(arr, target) {
  let start = 0;
  let end = arr.length;
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return end;
}

let result = [];
for (let i = 0; i < m; i++) {
  const upper = upperBound(arr, arr2[i]);
  const lower = lowerBound(arr, arr2[i]);
  const data = Number(upper) - Number(lower);
  result.push(data);
}

console.log(result.join(" "));
