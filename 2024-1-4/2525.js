//경우의 수

// 조리 시간을 더해도 시간 변경이 없을때
// 조리시간을 더하면 시간과 분이 변경될때
// 조리 시간을 더했을때 시간이 0이될때

const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().split("\n");

const data = input[0].split(" ");

let hour = Number(data[0]);
let min = Number(data[1]);
let cookTime = Number(input[1]);

if (min + cookTime < 60) {
  min += cookTime;
} else {
  hour = parseInt((min + cookTime) / 60) + hour;
  min = (min + cookTime) % 60;
  if (hour > 23) hour -= 24;
}

console.log(`${hour} ${min}`);
