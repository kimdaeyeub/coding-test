const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const n = Number(input[0]);

let weight = {}; // 알파벳별 가중치를 저장할 객체
for (let i = 1; i <= n; i++) {
  const word = input[i];
  for (let j = 0; j < word.length; j++) {
    const char = word[j];
    const power = Math.pow(10, word.length - j - 1);
    if (weight[char]) {
      weight[char] += power;
    } else {
      weight[char] = power;
    }
  }
}

// 가중치에 따라 알파벳을 정렬
let sortedChars = Object.keys(weight).sort((a, b) => weight[b] - weight[a]);

// 가중치가 높은 순으로 숫자 할당
let val = {};
let num = 9;
sortedChars.forEach((char) => {
  val[char] = num--;
});

// 각 단어를 숫자로 변환
let sum = 0;
for (let i = 1; i <= n; i++) {
  let numStr = "";
  for (let char of input[i]) {
    numStr += val[char];
  }
  sum += Number(numStr);
}

console.log(sum);
