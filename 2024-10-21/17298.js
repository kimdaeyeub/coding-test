const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);

let arr = input[1].split(" ").map(Number);

let stack = [];
let results = new Array(N).fill(-1);

for (let i = 0; i < N; i++) {
  while (stack.length > 0 && arr[stack[stack.length - 1]] < arr[i]) {
    results[stack.pop()] = arr[i];
  }
  stack.push(i);
}
console.log(results);
