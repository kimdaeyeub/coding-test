const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);

let arr = new Array(N).fill(0);

for (let i = 0; i < N; i++) {
  arr[i] = i + 1;
}

for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  let temp = arr[a - 1];
  arr[a - 1] = arr[b - 1];
  arr[b - 1] = temp;
}

console.log(arr.join(" "));
