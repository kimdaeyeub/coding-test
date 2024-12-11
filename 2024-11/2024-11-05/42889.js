function solution(n, stages) {
  let fail = new Array(n + 1).fill(0);

  for (let x of stages) {
    fail[x - 1] += 1;
  }

  let length = stages.length;

  for (let i = 0; i < fail.length - 1; i++) {
    let temp = fail[i];
    fail[i] = fail[i] / length;
    length -= temp;
  }
  fail.pop();
  fail = fail.map((item, index) => [item, index + 1]);
  fail.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return b[0] - a[0];
    }
  });

  return fail.map((item) => item[1]);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); //[3,4,2,1,5]
console.log(solution(4, [4, 4, 4, 4, 4])); // [4,1,2,3]
