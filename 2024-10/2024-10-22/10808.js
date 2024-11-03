const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim();

let arr = new Array(26).fill(0);

for (let x of input) {
  const code = x.charCodeAt(0) - 97;
  arr[code] += 1;
}

console.log(arr.join(" "));
