const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const A = Number(input[0]);
const B = Number(input[1]);

console.log(A * B);