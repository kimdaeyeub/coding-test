const fs = require("fs");

const [T, input] = fs.readFileSync("./input.txt").toString().trim().split("\n");

const newInput = input.split(/S|LL/g).length;
console.log(Math.min(T, newInput));
