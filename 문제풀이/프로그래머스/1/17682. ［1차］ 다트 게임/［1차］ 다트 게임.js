function solution(dartResult) {
  var answer = 0;
  const obj = {
    S: "**1",
    D: "**2",
    T: "**3",
    "*": "*2",
    "#": "*(-1)",
  };
  dartResult = dartResult.split("").map((item) => {
    if (!Number(item) && Number(item) !== 0) {
      return item;
    } else {
      return Number(item);
    }
  });
  let arr = [];
  let temp = [];
  let char = "";
  while (dartResult.length !== 0) {
    const item = dartResult.shift();
    if (typeof item === "number") {
      temp.push(item);
    }
    if (typeof item === "string") {
      if (item === "*" && arr.length - 1 >= 0) {
        arr[arr.length - 1].push(obj[item]);
      }
      temp.push(obj[item]);
    }
    if (typeof dartResult[0] === "number" && typeof item === "string") {
      arr.push(temp);
      temp = [];
    }
    if (dartResult.length === 0) {
      arr.push(temp);
      temp = [];
    }
  }

  arr = arr.map((item) => item.join(""));
  answer = eval(arr.join("+"));
  return answer;
}
