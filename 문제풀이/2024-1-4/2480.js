//제목: 주사위 세개

// 3개의 숫자가 같은 경우 10,000+눈*1000원
// 2개의 숫자가 같은 경우 1000+눈*100원
// 다 다를 경우 100*제일 큰 개

const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().split("\n");

let [a, b, c] = input[0].split(" ").map(Number);

if (a === b && a === c) {
  console.log(10000 + 1000 * a);
} else if (a === b) {
  console.log(1000 + 100 * a);
} else if (a === c) {
  console.log(1000 + 100 * a);
} else if (b === c) {
  console.log(1000 + 100 * b);
} else {
  const max = Math.max(a, b, c);
  console.log(max * 100);
}
