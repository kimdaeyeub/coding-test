const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("");

let arr = [input[0]];
for (let i = 1; i < input.length; i++) {
  if (arr[arr.length - 1] !== input[i]) {
    arr.push(input[i]);
  }
}
let countOne = 0;
let countZero = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "1") {
    countOne += 1;
  } else {
    countZero += 1;
  }
}
console.log(countOne > countZero ? countZero : countOne);
