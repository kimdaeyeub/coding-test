const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim();

function solution(value) {
  let mini = [];
  const arr = value.split(/(\+|\-)/);
  const formula = arr.map((item) => {
    if (item === "+" || item === "-") {
      return item;
    } else {
      return parseInt(item, 10);
    }
  });

  let fake = 0;

  for (let i = 0; i < formula.length; i++) {
    if (formula[i] === "+") {
      //fake = +formula[i];
    } else if (formula[i] === "-") {
      mini.push(fake);
      fake = 0;
      mini.push(formula[i]);
    } else {
      //숫자일경우
      fake += formula[i];
      if (i === formula.length - 1) {
        mini.push(fake);
      }
    }
  }

  return eval(mini.join(""));
}

console.log(solution(input));
