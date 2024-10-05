const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().split("\n");

const num = Number(input[0]);

let str = "";
for (let i = 1; i < num + 1; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  if (i === 1) {
    str = `${a + b}`;
  } else {
    str += `\n${a + b}`;
  }
}

console.log(str);
