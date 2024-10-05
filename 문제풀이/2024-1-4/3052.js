const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const data = input.map((x) => parseInt(Number(x) % 42));

let arr = [];

for (let i = 0; i < data.length; i++) {
  if (!arr.includes(data[i])) {
    arr.push(data[i]);
  }
}

console.log(arr.length);
console.log(input);
