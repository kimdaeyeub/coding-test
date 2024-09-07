function solution(N, K) {
  let nums = [];

  for (let i = 1; i <= N; i++) {
    nums.push(i);
  }

  while (nums.length > 1) {
    const vals = nums.splice(0, K - 1);
    const value = nums.shift();
    nums = [...nums, ...vals];
    // for (let x of vals) {
    //   nums.push(x);
    // }
  }
  return nums[0];
}

console.log(solution(5, 2));
