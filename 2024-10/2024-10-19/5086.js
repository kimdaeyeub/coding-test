const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function solution(a, b) {
  if (a > b && a % b === 0) {
    console.log("multiple");
  } else if (a < b && b % a === 0) {
    console.log("factor");
  } else {
    console.log("neither");
  }
}

for (let i = 0; i < input.length - 1; i++) {
  const [n, k] = input[i].split(" ").map(Number);
  solution(n, k);
}
