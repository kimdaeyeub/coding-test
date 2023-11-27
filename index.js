const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim();

function solution(value) {
  const arr = value.split("+|-");
  console.log(arr);
}

console.log(solution(input));
