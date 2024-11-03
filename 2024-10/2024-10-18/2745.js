const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [num, N] = input[0].split(" ");

console.log(parseInt(num, N));
