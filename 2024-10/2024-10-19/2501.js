const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim();

const [N, K] = input.split(" ").map(Number);

let count = 0;
let val = 0;
let a = 1;

while (count < K && a <= N) {
  if (N % a === 0) {
    count += 1;
    val = a;
  }
  a++;
}

if (count < K) {
  console.log(0);
} else {
  console.log(val);
}
