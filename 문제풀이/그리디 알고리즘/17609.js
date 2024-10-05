const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const testCase = Number(input[0]);

for (let i = 1; i <= testCase; i++) {
  const data = input[i].split("");
  let start = 0;
  let end = data.length - 1;
  let result = 0;
  while (start < end) {
    if (data[start] !== data[end]) {
      if (data[start + 1] === data[end] && start + 1 < end) {
        start++;
        result += 1;
        if (result === 2) break;
      } else if (data[start] === data[end - 1] && end - 1 > start) {
        end--;
        result += 1;
        if (result === 2) break;
      } else if (
        data[start + 1] !== data[end] &&
        data[start] !== data[end - 1]
      ) {
        result = 2;
        break;
      }
    }
    start++;
    end--;
  }
  console.log(result);
}
