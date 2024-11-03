const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim();

const [x, y, w, h] = input.split(" ").map(Number);

let min = Infinity;

const temp = [w, h, 0, 0];

for (let i = 0; i < temp.length; i++) {
  if (i % 2 === 0) {
    min = Math.min(min, Math.abs(x - temp[i]));
  } else {
    min = Math.min(min, Math.abs(y - temp[i]));
  }
}

console.log(min);
