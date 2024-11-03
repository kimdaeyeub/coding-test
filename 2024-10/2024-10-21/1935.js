const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);

let str = input[1].split("");

for (let i = 0; i < str.length; i++) {
  if (str[i] !== "+" && str[i] !== "-" && str[i] !== "*" && str[i] !== "/") {
    str[i] = input[str[i].charCodeAt(0) - 63];
  }
}

let stack = [];
let results = [];
for (let i = 0; i < str.length; i++) {
  if (str[i] === "+" || str[i] === "-" || str[i] === "*" || str[i] === "/") {
    const a = stack.pop();
    const b = stack.pop();
    stack.push(`${b}${str[i]}${a}`);
  } else {
    stack.push(str[i]);
  }
}
console.log(eval(stack[0]).toFixed(2));
