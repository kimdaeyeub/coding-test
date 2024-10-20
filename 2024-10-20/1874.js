const fs = require("fs");

const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = Number(input.shift());

let stack = [];
let arr = input.map(Number);
let pointer = 0;
let list = [];
let results = [];

for (let i = 1; i <= N; i++) {
  list.push(i);
  results.push("+");
  if (list[list.length - 1] === arr[pointer]) {
    while (arr[pointer] === list[list.length - 1] && pointer < N) {
      results.push("-");
      const item = list.pop();
      stack.push(item);
      pointer++;
    }
  }
}

function validate(stack, input) {
  if (stack.length !== input.length) {
    return false;
  }
  for (let i = 0; i < stack.length - 1; i++) {
    if (stack[i] !== input[i]) return false;
  }
  return true;
}

if (list.length === 0 && validate(stack, input)) {
  console.log(results.join("\n"));
} else {
  console.log("NO");
}
