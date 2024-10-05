const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const testCase = Number(input[0]);

let arr = input[1].split(" ").map(Number).reverse();

function lowerbound(array, target) {
  let start = 0;
  let end = array.length;

  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (array[mid] >= target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return end;
}
let d = [0];

for (let x of arr) {
  if (d[d.length - 1] < x) {
    d.push(x);
  } else {
    const data = lowerbound(d, x);
    d[data] = x;
  }
}
console.log(d);
console.log(testCase - (d.length - 1));
