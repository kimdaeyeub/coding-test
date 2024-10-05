function solution(prices) {
  let stack = [];
  let arr = new Array(prices.length).fill(0);

  for (let i = 0; i < prices.length; i++) {
    while (stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]) {
      console.log("hello");
      let j = stack.pop();
      arr[j] = i - j;
    }
    stack.push(i);
  }

  while (stack.length > 0) {
    let j = stack.pop();
    arr[j] = prices.length - 1 - j;
  }
  return arr;
}

console.log(solution([1, 2, 3, 2, 3]));
