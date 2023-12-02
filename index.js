//
//총 길이 3
//10*2+20*2+40*1
//(10+20)+(10+20+40)
//
//총 길이4
//(10+20)+(10+20+40)+(10+20+40+80)
//10*3+20*3+40*2+80*1

const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function solution(value) {
  const count = value[0];
  value.shift();

  const numberList = value.sort((a, b) => {
    return a - b;
  });

  let total = 0;
  for (let i = 0; i < count; i++) {
    if (i === 0) {
      total += Number(numberList[i]) * (count - 1);
    } else {
      total += Number(numberList[i]) * (count - i);
    }
  }
  return total;
}

console.log(solution(input));
