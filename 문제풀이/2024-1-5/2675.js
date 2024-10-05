const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().split("\n");

const caseNum = Number(input[0]);

for (let i = 1; i <= caseNum; i++) {
  const data = input[i].split(" ");
  let char = "";
  for (let j = 0; j < data[1].length; j++) {
    char += data[1].charAt(j).repeat(data[0]);
  }
  console.log(char);
}
