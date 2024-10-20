const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function generateSpace(length) {
  let str = "";
  for (let i = 0; i < length / 3; i++) {
    str += " ";
  }
  return str;
}
function solution(s) {
  if (s === "-") return "-";

  const length = s.length;
  const str =
    solution(s.slice(0, length / 3)) +
    generateSpace(length) +
    solution(s.slice((length / 3) * 2, length));

  return str;
}
// - - - - - - - - -

for (let x of input) {
  const num = Math.pow(3, Number(x));
  let str = "";
  for (let i = 0; i < num; i++) {
    str += "-";
  }
  const result = solution(str);
  console.log(result);
}
