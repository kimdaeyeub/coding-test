const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().split("\n");

const uppercase = /[A-Z]/;
const lowercase = /[a-z]/;
const space = /\s/;
const number = /[0-9]/;

for (let i = 0; i < input.length; i++) {
  let result = new Array(4).fill(0);
  if (input[i] === "") continue;
  for (let j = 0; j < input[i].length; j++) {
    const str = input[i][j];
    if (uppercase.test(str)) {
      result[1] += 1;
    } else if (lowercase.test(str)) {
      result[0] += 1;
    } else if (number.test(str)) {
      result[2] += 1;
    } else {
      result[3] += 1;
    }
  }
  console.log(result.join(" "));
}
