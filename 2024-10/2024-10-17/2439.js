const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().split("\n");

const N = Number(input[0]);

console.log(N);

for (let i = 0; i < N; i++) {
  let space = " ";
  let star = "*";
  let answer = "";
  for (let j = 0; j < N; j++) {
    if (N - (i + 1) >= j + 1) {
      answer += space;
    } else {
      answer += star;
    }
  }
  console.log(answer);
}
