const fs = require("fs");

const [first, second] = fs.readFileSync("./input.txt").toString().split("\n");

const count = Number(first);

let numArray = second.split(" ").map(Number);

numArray.sort((a, b) => a - b);

console.log(numArray[0], numArray[count - 1]);
