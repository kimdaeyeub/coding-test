const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const testCaseNum = Number(input.splice(0, 1));

let data = input.map((item) => item.split(" "));
data = data.map((item) => {
  return [Number(item[0]), item[1]];
});

data = data.sort((a, b) => a[0] - b[0]);
data = data.map((item) => item.join(" "));
data = data.join("\n");

console.log(data);
