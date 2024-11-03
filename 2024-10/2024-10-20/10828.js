const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);

const stack = [];
for (let i = 1; i <= N; i++) {
  const command = input[i].split(" ");
  if (command[0] === "push") {
    stack.push(command[1]);
  } else if (command[0] === "pop") {
    if (stack.length === 0) {
      console.log(-1);
    } else {
      let temp = stack.pop();
      console.log(temp);
    }
  } else if (command[0] === "size") {
    console.log(stack.length);
  } else if (command[0] === "empty") {
    console.log(stack.length === 0 ? 1 : 0);
  } else if (command[0] === "top") {
    if (stack.length === 0) {
      console.log(-1);
    } else {
      console.log(stack[stack.length - 1]);
    }
  }
}
