const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);

const h = input[1].split(" ").map(Number);

let newArr = new Array(1000001).fill(0);
let result = 0;
//2 1 5 4 3

for (let x of h) {
  if (newArr[x] > 0) {
    newArr[x] -= 1;
    newArr[x - 1] += 1;
  } else {
    newArr[x - 1] += 1;
    result += 1;
  }
}
console.log(result);
