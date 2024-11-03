const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);

for (let i = 1; i <= N; i++) {
  let stack = [];
  for (let x of input[i]) {
    if (x === "(") {
      stack.push(x);
    } else {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        stack.push(x);
      }
    }
  }
  if (stack.length === 0) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
