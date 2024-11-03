const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

let x = [];
let y = [];

for (let i = 1; i <= 2 * N; i++) {
  const arr = input[i].split(" ").map(Number);
  if (i > N) {
    y.push(arr);
  } else {
    x.push(arr);
  }
}

let results = [];
for (let i = 0; i < N; i++) {
  results.push([]);
  for (let j = 0; j < M; j++) {
    results[i].push(x[i][j] + y[i][j]);
  }
}

for (let i = 0; i < N; i++) {
  console.log(results[i].join(" "));
}
