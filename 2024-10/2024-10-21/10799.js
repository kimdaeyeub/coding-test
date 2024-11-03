const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("");

let stack = [];

let count = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i] === "(" && input[i + 1] === ")") {
    // 레이저
    count += stack.length;
    i++;
  } else {
    if (input[i] === ")") {
      stack.pop();
      count++;
    } else {
      stack.push(input[i]);
    }
  }
}

console.log(count);
