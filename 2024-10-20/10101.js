const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [a, b, c] = input.map(Number);

if (a + b + c !== 180) {
  console.log("Error");
} else if (a === b && b === c) {
  console.log("Equilateral");
} else if (a === b || a === c || b === c) {
  console.log("Isosceles");
} else {
  console.log("Scalene");
}
