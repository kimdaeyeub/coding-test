const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);

let arr = new Array(N).fill(0);

for (let i = 1; i <= M; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);
  for (let j = a - 1; j < b; j++) {
    arr[j] = c;
  }
}
console.log(arr.join(" "));
