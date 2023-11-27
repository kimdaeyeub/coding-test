const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim();

function solution(value) {
  const arr = value.split("+");
  if (arr.length === 1) {
    // 식이 마이너스(-)를 포함하지 않는 경우
    return Number(eval(value));
  } else {
    //const formula = arr.map((item) => item.split("+"));
    const formula = arr.map((item) => eval(parseInt(item, 10))).join("-");
    return Number(eval(formula));
  }
}

console.log(solution(input));
