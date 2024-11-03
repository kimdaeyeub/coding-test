const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const str = input[0].split("");

const N = Number(input[1]);

let start = [...str];
let end = [];

for (let i = 2; i < 2 + N; i++) {
  const command = input[i].split(" ");
  if (start.length !== 0 && command[0] === "B") {
    start.pop();
  } else if (start.length !== 0 && command[0] === "L") {
    const item = start.pop();
    end.push(item);
  } else if (end.length !== 0 && command[0] === "D") {
    const item = end.pop();
    start.push(item);
  } else if (command[0] === "P") {
    start.push(command[1]);
  }
}

const results = [...start, ...end.reverse()];

console.log(results.join(""));
