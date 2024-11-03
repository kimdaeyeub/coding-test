const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim();

const [a, b, c, d] = input.split(" ").map(Number);

console.log(eval(`${a}${b}+${c}${d}`));
