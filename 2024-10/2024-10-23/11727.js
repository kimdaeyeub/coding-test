const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim();
const N = Number(input);

let arr = new Array(N + 1).fill(0);
arr[1] = 1;
arr[2] = 3;

function solution(n) {
  if (arr[n] !== 0) {
    return arr[n];
  }

  let total = (solution(n - 1) + 2 * solution(n - 2)) % 10007;
  arr[n] = total;
  return total;
}

console.log(solution(N));
