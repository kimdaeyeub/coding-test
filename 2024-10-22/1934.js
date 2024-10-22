const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);

const gcd = (a, b) => {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

for (let i = 1; i <= N; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  const value = (a * b) / gcd(a, b);
  console.log(value);
}
