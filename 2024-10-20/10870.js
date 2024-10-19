const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim();

function solution(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  const value = solution(n - 2) + solution(n - 1);

  return value;
}

console.log(solution(Number(input)));
