const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let num = Number(input) / 4;
let answer = "";

for (let i = 0; i < num; i++) {
  answer += "long ";
}

answer += "int";

console.log(answer);
