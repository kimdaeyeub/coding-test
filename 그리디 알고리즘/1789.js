const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim();

const data = Number(input) * 2;

let count = 1;
while (true) {
  const result = count * (count + 1);
  if (result < data) {
    if ((count + 1) * (count + 2) > data) {
      break;
    }
    count += 1;
  } else {
    break;
  }
}

console.log(count);
