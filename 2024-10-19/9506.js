const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function validate(n) {
  let arr = [];
  for (let i = 1; i < n; i++) {
    if (n % i === 0) arr.push(i);
  }

  if (arr.reduce((a, b) => a + b) === n) {
    console.log(`${n} = ${arr.join(" + ")}`);
  } else {
    console.log(`${n} is NOT perfect.`);
  }
}

for (let i = 0; i < input.length - 1; i++) {
  validate(Number(input[i]));
}
