const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().split("\n");

const testCaseCount = Number(input[0]);

for (let i = 1; i < testCaseCount + 1; i++) {
  const data = input[i].split(" ").map(Number);
  const count = data[0];
  const sum = data.reduce((a, b) => a + b) - count;
  const average = sum / count;
  let overAverageCount = 0;
  data.reduce((a, b) => {
    if (b > average) {
      overAverageCount += 1;
    }
  });
  console.log(`${((overAverageCount / count) * 100).toFixed(3)}%`);
}
