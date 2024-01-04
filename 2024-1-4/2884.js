// 일어날 시간이 주어짐
//알람은 기상시간의 45분전이여야 함.

// 경우의 수
// 그냥 빼도 되는 경우 => 분이 45보다 크거나 같을 경우
// 뺐을때 시간을 그냥 1시간 줄일 수 있는 경우 => 분이 45보다 작고 시간이 0보다 클경우
//시간이 0일 경우 시간은 23으로 고정값

const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().split("\n");

const [a, b] = input[0].split(" ");

function alarm(hour, min) {
  hour = Number(hour);
  min = Number(min);
  if (min >= 45) {
    console.log(`${hour} ${min - 45}`);
  } else if (min < 45 && hour > 0) {
    console.log(`${hour - 1} ${60 + min - 45}`);
  } else {
    console.log(`23 ${60 + min - 45}`);
  }
}

alarm(a, b);
