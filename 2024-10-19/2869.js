const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim();

const [A, B, V] = input.split(" ").map(Number);

let answer = V - A;

answer = Math.ceil(answer / (A - B)) + 1;

console.log(answer);
