const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim();

const N = Number(input);

let temp = N;

while (temp !== 1) {
  for (let i = 2; i <= temp; i++) {
    if (temp % i === 0) {
      temp = temp / i;
      console.log(i);
      break;
    }
  }
}
