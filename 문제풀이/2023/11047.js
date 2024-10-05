const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split("\n");

const N = Number(input[0].split(" ")[0]); //10
const K = Number(input[0].split(" ")[1]); //4200
let count = 0;
let remain = K;

for (let i = N; i > 0 && remain > 0; i--) {
  if (Math.floor(remain / Number(input[i])) > 0) {
    const value = Math.floor(remain / Number(input[i]));
    count = count + value;
    remain = remain - value * Number(input[i]);
  }
}
console.log(count);
