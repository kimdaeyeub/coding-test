const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

let arr = new Array(N).fill(0).map((item, index) => (item = index + 1));

for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  let start = arr.slice(0, a - 1);
  let change = arr.slice(a - 1, b);
  let end = arr.slice(b);
  arr = [...start, ...change.reverse(), ...end];
}

console.log(arr.join(" "));
