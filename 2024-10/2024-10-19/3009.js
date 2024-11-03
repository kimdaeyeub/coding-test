const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let x = [];
let y = [];
let result = [];
for (let i = 0; i < input.length; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  x.push(a);
  y.push(b);
}

const xSet = new Set();
x.map((item) => xSet.add(item));
let totalX = 0;
xSet.forEach((item) => (totalX += item));
totalX = totalX * 2 - x.reduce((a, b) => a + b);

const ySet = new Set();
y.map((item) => ySet.add(item));
let totalY = 0;
ySet.forEach((item) => (totalY += item));
totalY = totalY * 2 - y.reduce((a, b) => a + b);
console.log(`${totalX} ${totalY}`);
