const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().split("\n");

const data = input[0].trim().split(" ");

if (data == "") {
  console.log(0);
} else {
  console.log(data.length);
}
