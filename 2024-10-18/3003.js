const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim();

const data = [1, 1, 2, 2, 2, 8];
const arr = input.split(" ").map(Number);

let results = new Array(6).fill(0);

for (let i = 0; i < arr.length; i++) {
  results[i] = data[i] - arr[i];
}

console.log(results.join(" "));
