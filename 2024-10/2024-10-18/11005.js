const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [Num, N] = input[0].split(" ").map(Number);

let answer = "";

for (let x of Num.toString(N)) {
  let temp = Number(x);
  if (isNaN(temp)) {
    answer += x.toUpperCase();
  } else {
    answer += temp;
  }
}

console.log(answer);
