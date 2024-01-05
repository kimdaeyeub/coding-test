const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().split("\n");
const data = input[0].split(" ");

let arr = [];
for (let i = 0; i < data.length; i++) {
  const num = data[i].split("");
  const formatNum = num.reverse();
  arr.push(Number(formatNum.join("")));
}

console.log(Math.max(arr[0], arr[1]));
