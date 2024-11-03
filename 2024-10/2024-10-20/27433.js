const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim();

const N = Number(input);

function solution(n) {
  if (n === 1 || n === 0) return 1;

  const value = n * solution(n - 1);
  return value;
}

console.log(solution(N));
