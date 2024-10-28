function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) answer[i] = [];
  for (let i = 0; i < arr1.length; i++) {
    let nums1 = arr1[i];
    let nums2 = arr2[i];
    for (let j = 0; j < nums1.length; j++) {
      answer[i].push(nums1[j] + nums2[j]);
    }
  }
  return answer;
}
