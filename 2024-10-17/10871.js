const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().split("\n");

const [N, X] = input[0].split(" ").map(Number);

let results = "";
const arr = input[1].split(" ").map(Number);

for (let i = 0; i < N; i++) {
  if (arr[i] < X) results += `${arr[i]} `;
}
console.log(results);
