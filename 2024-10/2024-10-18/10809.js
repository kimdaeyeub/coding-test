const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim();

let arr = new Array(26).fill(-1);

for (let i = 0; i < input.length; i++) {
  const index = input[i].charCodeAt(0) - 97;
  if (arr[index] !== -1) continue;
  arr[index] = i;
}

console.log(arr.join(" "));
