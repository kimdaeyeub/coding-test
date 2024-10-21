const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const N = Number(input[0]);

let arr = input[1].split(" ").map(Number);

let data = {};
for (let i = 0; i < arr.length; i++) {
  if (!data[arr[i]]) data[arr[i]] = 0;
  data[arr[i]] += 1;
}

let stack = [];
let results = new Array(N).fill(-1);
for (let i = 0; i < N; i++) {
  while (
    stack.length > 0 &&
    data[arr[stack[stack.length - 1]]] < data[arr[i]]
  ) {
    results[stack.pop()] = arr[i];
  }
  stack.push(i);
}
console.log(results.join(" "));
