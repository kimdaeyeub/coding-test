const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("");

let reverse = true;

let results = [];
let temp = [];
for (let x of input) {
  if (x === "<") {
    reverse = false;
    if (temp.length !== 0) {
      results.push(temp.join(""));
      temp = [];
    }
  }
  if (reverse) {
    if (x === " ") {
      results.push(temp.join(""));
      results.push(" ");
      temp = [];
    } else {
      temp.unshift(x);
    }
  } else {
    if (x === ">") {
      temp.push(x);
      results.push(temp.join(""));
      temp = [];
      reverse = true;
    } else {
      temp.push(x);
    }
  }
}

if (temp.length !== 0) {
  results.push(temp.join(""));
}
console.log(results.join(""));
