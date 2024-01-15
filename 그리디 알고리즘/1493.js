const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const box = input[0].split(" ").map(Number);

const boxCase = Number(input[1]);

let boxVol = box.reduce((a, b) => a * b);
let totalCount = 0;

for (let i = input.length - 1; i > 1; i--) {
  const [leng, count] = input[i].split(" ").map(Number);
  const miniBox = (2 ** leng) ** 3;
  const sortBox = box.sort((a, b) => a - b);
  console.log(sortBox[0], 2 ** leng);
  if (sortBox[0] >= 2 ** leng) {
    if (miniBox * count <= boxVol) {
      boxVol = boxVol - miniBox * count;
      totalCount = totalCount + count;
      console.log(totalCount);
    } else {
      totalCount = totalCount + parseInt(boxVol / miniBox);
      boxVol = boxVol - parseInt(boxVol / miniBox) * miniBox;
      console.log(totalCount);
    }
  }
  if (boxVol === 0) {
    console.log(totalCount);
    return;
  }
}
if (boxVol !== 0) console.log(-1);
