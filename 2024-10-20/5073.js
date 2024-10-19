const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function validate(a, b, c) {
  if (c >= a + b) {
    console.log("Invalid");
  } else if (a === b && b === c) {
    console.log("Equilateral");
  } else if (a === b || b === c || c === a) {
    console.log("Isosceles");
  } else {
    console.log("Scalene");
  }
}

for (let i = 0; i < input.length - 1; i++) {
  const [a, b, c] = input[i]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  validate(a, b, c);
}
