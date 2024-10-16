function solution(numbers) {
  numbers = numbers.sort((a, b) => {
    const t1 = a.toString() + b.toString();
    const t2 = b.toString() + a.toString();
    return t1 > t2 ? -1 : 1;
  });
  return numbers.join("");
}

console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));
