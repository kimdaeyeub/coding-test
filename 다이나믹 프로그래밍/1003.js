const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const testCase = Number(input[0]);

let zero = 0;
let one = 0;

const arr = Array.from({ length: 41 }, () => new Array(2).fill(0));
arr[0] = [1, 0];
arr[1] = [0, 1];

for (let i = 2; i < 41; i++) {
  arr[i][0] = arr[i - 1][0] + arr[i - 2][0];
  arr[i][1] = arr[i - 1][1] + arr[i - 2][1];
}

for (let i = 1; i <= testCase; i++) {
  const num = Number(input[i]);
  console.log(arr[num][0], arr[num][1]);
}
