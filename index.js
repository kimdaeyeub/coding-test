const fs = require("fs");

const input = fs
  .readFileSync("./input.txt")
  .toString()
  .split(/([+,-])/)
  .join("-");
console.log(input);
