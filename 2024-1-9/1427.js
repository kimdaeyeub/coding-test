const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let data = input[0];

data = data.split("").map(Number);

data = data.sort((a, b) => b - a);

console.log(data.join(""));
