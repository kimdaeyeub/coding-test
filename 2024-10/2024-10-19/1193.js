const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let count = 1;
let length = 1;

let result = "";
const N = Number(input[0]);

while (true) {
  if (length >= N) {
    const start = length - count + 1;
    if (count % 2 === 0) {
      result = `${1 + (N - start)}/${count - (N - start)}`;
    } else {
      result = `${count - (N - start)}/${1 + (N - start)}`;
    }
    break;
  } else {
    count += 1;
    length += count;
  }
}

console.log(result);
