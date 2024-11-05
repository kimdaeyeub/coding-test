function solution(decimal) {
  let stack = [];
  while (decimal > 0) {
    stack.push(decimal % 2);
    decimal = Math.floor(decimal / 2);
  }

  let result = "";
  while (stack.length !== 0) {
    result += stack.pop();
  }

  return result;
}

console.log(solution(10)); // 1010
console.log(solution(27)); // 11011
console.log(solution(12345)); // 11000000111001
