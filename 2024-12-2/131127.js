function solution(want, number, discount) {
  const wholeDay = number.reduce((a, b) => a + b);
  let day = 0;
  while (discount.length >= want.length) {
    let obj = {};
    for (let i = 0; i < want.length; i++) {
      obj[want[i]] = number[i];
    }
    for (let i = 0; i < wholeDay; i++) {
      if (!obj[discount[i]]) break;
      if (obj[discount[i]] <= 0) break;

      obj[discount[i]] -= 1;
      if (
        i === wholeDay - 1 &&
        Object.values(obj).filter((item) => item !== 0).length === 0
      ) {
        day += 1;
      }
    }
    discount.shift();
  }
  return day;
}

console.log(
  solution(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    [
      "chicken",
      "apple",
      "apple",
      "banana",
      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ]
  )
); // 3
console.log(
  solution(
    ["apple"],
    [10],
    [
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
    ]
  )
); //0;
