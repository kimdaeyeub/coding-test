const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim();

const [N, K] = input.split(" ").map(Number);

let arr = [];

for (let i = 1; i <= N; i++) {
  arr.push(i);
}

let count = 1;
let results = [];
while (arr.length !== 0) {
  let item = arr.shift();
  if (count === K) {
    results.push(item);
    count = 1;
  } else {
    arr.push(item);
    count++;
  }
}
console.log(`<${results.join(", ")}>`);
