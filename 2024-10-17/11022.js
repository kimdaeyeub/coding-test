const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);

for (let i = 1; i <= N; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  console.log(`Case #${i}: ${a} + ${b} = ${a + b}`);
}
