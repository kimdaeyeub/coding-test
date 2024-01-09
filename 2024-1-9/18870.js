const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const testCaseNum = Number(input[0]);

const data = input[1].split(" ").map(Number);

let sortArr = input[1].split(" ").map(Number);
let val = {};
const newSet = new Set();

sortArr = sortArr.sort((a, b) => a - b);
sortArr.map((item) => newSet.add(item));
sortArr = [];
newSet.forEach((item) => sortArr.push(item));
sortArr = sortArr.map((item, index) => {
  if (!val[item]) {
    val[item] = index;
  }
});

console.log(data.map((item) => val[item]).join(" "));
