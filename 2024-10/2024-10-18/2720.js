// 쿼터(Quarter, $0.25)의 개수, 다임(Dime, $0.10)의 개수, 니켈(Nickel, $0.05)의 개수, 페니(Penny, $0.01

const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]); //3

const money = {
  quarter: 25,
  dime: 10,
  nickel: 5,
  penny: 1,
};

function calculate(a) {
  let answer = [0, 0, 0, 0];
  while (a !== 0) {
    if (a >= 25) {
      answer[0] = parseInt(a / 25);
      a = a % 25;
    } else if (a >= 10) {
      answer[1] = parseInt(a / 10);
      a = a % 10;
    } else if (a >= 5) {
      answer[2] = parseInt(a / 5);
      a = a % 5;
    } else {
      answer[3] = a;
      break;
    }
  }
  return answer;
}

for (let i = 1; i < input.length; i++) {
  let answer = calculate(Number(input[i])).join(" ");
  console.log(answer);
}
