function solution(n, stages) {
  let result = [];
  const fail = new Array(n + 1).fill(0);

  for (let x of stages) {
    fail[x - 1] += 1;
  }

  let length = stages.length;

  for (let i = 0; i < fail.length - 1; i++) {
    result.push([fail[i] / length, i + 1]);
    length -= fail[i];
  }
  result.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return b[0] - a[0];
    }
  });

  return result.map((item) => item[1]);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); //[3,4,2,1,5]
console.log(solution(4, [4, 4, 4, 4, 4])); // [4,1,2,3]
