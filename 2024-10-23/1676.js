const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim();

let count = 0;
let N = Number(input);
let val = 1;
for (let i = 5; i <= N; i *= 5) {
  count += Math.floor(N / i);
}
console.log(count);
