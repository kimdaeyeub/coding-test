const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().toLowerCase();

const data = {};

for (let x of input) {
  if (!data[x]) data[x] = 0;
  data[x] += 1;
}

const max = Math.max(...Object.values(data));

let results = [];
for (let x in data) {
  if (data[x] === max) results.push(x);
}

if (results.length > 1) {
  console.log("?");
} else {
  console.log(results[0].toUpperCase());
}
