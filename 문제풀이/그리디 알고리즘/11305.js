//1km당 1리터의 기름을 사용한다.
// 도시당 주유소는 하나씩이며 주유소에서 기름의 가격은 다르다.
// 원 안에 있는 숫자는 기름값, 도로위의 숫자는 도로의 길이를 의미

// 첫번째 줄 도시의 개수
// 두번째 줄 도시 사이의 거리
// 셋째 줄 도시의 리터당 가격

const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const cityCount = Number(input[0]);
const cityLength = input[1].split(" ").map(Number);
const oilMoney = input[2].split(" ").map(Number);

let money = cityLength[0] * oilMoney[0];
let minMoney = oilMoney[0];

for (let i = 1; i < cityLength.length; i++) {
  if (oilMoney[i] < minMoney) {
    minMoney = oilMoney[i];
  }
  money += minMoney * cityLength[i];
}

console.log(money);
