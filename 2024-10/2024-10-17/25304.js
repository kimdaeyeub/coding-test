const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().split("\n");

const X = Number(input[0]);
const N = Number(input[1]);

let total = 0;

for (let i = 2; i < 2 + N; i++) {
  const [price, count] = input[i].split(" ").map(Number);
  total += price * count;
}

if (total === X) {
  console.log("Yes");
} else {
  console.log("No");
}
