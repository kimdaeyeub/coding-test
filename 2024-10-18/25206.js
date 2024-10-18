const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const data = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};
let total = 0;
let count = 0;

for (let x of input) {
  const [_, a, b] = x.split(" ");
  if (b === "P") continue;
  total += data[b] * Number(a);
  count += Number(a);
}
const result = total / count;
console.log(Math.round(result * 1000000) / 1000000);
