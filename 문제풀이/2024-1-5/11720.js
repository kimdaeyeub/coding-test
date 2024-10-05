const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().split("\n");

const caseNum = Number(input[0]);
const numList = input[1].split("").map(Number);

console.log(numList.reduce((a, b) => a + b));
