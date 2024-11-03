const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);

let x = [];
let y = [];

for (let i = 1; i < input.length; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  x.push(a);
  y.push(b);
}

x = x.sort((a, b) => a - b);
y = y.sort((a, b) => a - b);
if (N === 1) {
  console.log(0);
} else {
  console.log((x.pop() - x.shift()) * (y.pop() - y.shift()));
}
