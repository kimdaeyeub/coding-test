const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().split("\n");

const firstLine = input[0].split(" ");

const testCase = firstLine[0];

const outputIndex = firstLine[1];

let arr = input[1].split(" ").map(Number);

arr = arr.sort((a, b) => a - b);

console.log(arr[outputIndex - 1]);
