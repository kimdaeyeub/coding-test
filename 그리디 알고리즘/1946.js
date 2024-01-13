const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const testCase = Number(input.splice(0, 1));

for (let i = 0; i < testCase; i++) {
  const people = Number(input.splice(0, 1)[0]);
  const test = input.splice(0, people);
  let count = 0;
  let minValue = 0;

  let arr = test.map((item) => item.split(" ").map(Number));
  arr = arr.sort((a, b) => a[0] - b[0]);
  arr.map((item, index) => {
    if (index === 0) {
      minValue = item[1];
    }
    if (item[1] > minValue && index !== 0) {
      count += 1;
    } else {
      minValue = item[1];
    }
  });
  console.log(people - count);
}
