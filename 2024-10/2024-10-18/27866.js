const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().split("\n");

const s = input[0].split("");
const i = Number(input[1]);
console.log(s[i - 1]);
