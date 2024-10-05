const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const data = Number(input[0]);

let result = 0;
const temp = parseInt(data / 5);

function compare(num) {
  if (num % 5 === 0) {
    result = Number(num / 5);
    return result;
  }

  for (let i = temp; i >= 0; i--) {
    if ((num - 5 * i) % 3 === 0) {
      const three = (num - 5 * i) / 3;
      return three + i;
    }
  }

  return -1;
}

console.log(compare(data));
