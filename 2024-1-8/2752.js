const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().split("\n");

const data = input[0].split(" ");

const sortData = data.sort((a, b) => a - b);

console.log(sortData.join(" "));
