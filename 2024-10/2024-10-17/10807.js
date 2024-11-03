const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().split("\n");

const N = Number(input[0]);

const target = Number(input[2]);

let arr = input[1].split(" ").map(Number);

arr = arr.filter((item) => item === target);
console.log(arr.length);
