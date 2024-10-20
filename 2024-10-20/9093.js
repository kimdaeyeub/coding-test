const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);

for (let i = 1; i <= N; i++) {
  const str = input[i]
    .split(" ")
    .map((item) => item.split("").reverse().join(""));
  console.log(str.join(" "));
}
