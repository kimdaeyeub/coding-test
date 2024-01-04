const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().split("\n");

const n = Number(input[0]);

let star = "*";
for (let i = 1; i <= n; i++) {
  if (i === 1) {
    console.log(star);
  } else {
    star += "*";
    console.log(star);
  }
}
