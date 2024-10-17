const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().split("\n");

console.log(input[0].charCodeAt(0));
