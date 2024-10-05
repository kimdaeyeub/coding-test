function solution(lottos, win_nums) {
  var answer = [];
  let count = 0;
  let obj = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
    1: 6,
    0: 6,
  };
  win_nums.map((item) => {
    if (lottos.includes(item)) {
      count++;
    }
  });
  let zero = 0;
  lottos.map((item) => {
    if (item === 0) zero++;
  });
  answer = [obj[zero + count], obj[count]];
  return answer;
}