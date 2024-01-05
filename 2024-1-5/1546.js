const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().split("\n");

const caseNum = Number(input[0]);
const score = input[1].split(" ").map(Number);

const maxScore = score.reduce((a, b) => Math.max(a, b));

const newScore = score.map((a) => (a / maxScore) * 100);

const sum = newScore.reduce((a, b) => a + b);

const average = sum / caseNum;
console.log(average);
