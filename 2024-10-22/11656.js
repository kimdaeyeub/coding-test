const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim();

const str = [...input];

const arr = [];

while (str.length !== 0) {
  arr.push([...str]);
  str.shift();
}

let results = arr
  .map((item) => item.join(""))
  .sort((a, b) => {
    if (a > b) {
      return 1;
    } else {
      return -1;
    }
  });

console.log(results.join("\n"));
