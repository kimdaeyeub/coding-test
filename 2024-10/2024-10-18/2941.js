const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim();

let count = 0;
let index = 0;
while (index !== input.length) {
  if (
    input[index] === "c" &&
    (input[index + 1] === "-" || input[index + 1] === "=")
  ) {
    index += 2;
    count += 1;
  } else if (
    input[index] === "d" &&
    ((input[index + 1] === "z" && input[index + 2] === "=") ||
      input[index + 1] === "-")
  ) {
    if (input[index + 1] === "-") {
      index += 2;
    } else {
      index += 3;
    }
    count += 1;
  } else if (
    (input[index] === "l" && input[index + 1] === "j") ||
    (input[index] === "n" && input[index + 1] === "j") ||
    (input[index] === "s" && input[index + 1] === "=") ||
    (input[index] === "z" && input[index + 1] === "=")
  ) {
    index += 2;
    count += 1;
  } else {
    index += 1;
    count += 1;
  }
}

console.log(count);
