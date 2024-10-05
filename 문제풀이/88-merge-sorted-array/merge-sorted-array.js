/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
  let index1 = m - 1;
  let index2 = n - 1;
  let mergeIndex = m + n - 1;

  // 두 배열의 끝에서부터 큰 수를 비교하여 nums1의 끝에서부터 채워 넣음
  while (index1 >= 0 && index2 >= 0) {
    if (nums1[index1] > nums2[index2]) {
      nums1[mergeIndex--] = nums1[index1--];
    } else {
      nums1[mergeIndex--] = nums2[index2--];
    }
  }

  // nums2에 남아 있는 요소를 nums1의 앞쪽으로 복사
  while (index2 >= 0) {
    nums1[mergeIndex--] = nums2[index2--];
  }
}
