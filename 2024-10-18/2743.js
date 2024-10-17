const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().split("\n");

console.log(Number(input[0].split("").length));
