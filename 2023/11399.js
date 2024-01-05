const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().split("\n");

const peopleNum = Number(input[0]);
const times = input[1].split(" ").map((time) => Number(time));

const linearTimes = times.sort((a, b) => a - b);
console.log(linearTimes);
let totalTimes = 0;

for (let i = 0; i < peopleNum; i++) {
  totalTimes = totalTimes + linearTimes[i] * (peopleNum - i);
  console.log(totalTimes);
}

console.log(totalTimes);
