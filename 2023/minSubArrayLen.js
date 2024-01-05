//Sliding Window - minSubArrayLen
//양수 배열과 양수라는 두 개의 매개 변수를 받아들이는 minSubArrayLen이라는 함수를 작성하세요.
//이 함수는 합이 함수에 전달된 정수보다 크거나 같은 인접한 하위 배열의 최소 길이를 반환해야 합니다. 값이 없는 경우 0을 반환합니다.
//
//예시:
//minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
//minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
//minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
//minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
//minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
//minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
//minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
//
//Time Complexity - O(n)
//Space Complexity - O(1)

function minSubArrayLen(arr, num) {
  //배열을 일단 다 더한 다음 양끝 점을 제거
  //그래도 조건보다 합이 클 경우 한번더 수행
  //조건보다 작아질 경우 양 끝중 하나를 빼야함
  // 양끝값중에 작은거를 빼는게 이득 그래야지 하나라도 사용하는 숫자를 더 줄일 수 있음.
  // 그렇게 해서 아슬아슬하게 넘을때까지 해당 조건을 반복해준다.
  // for문의 조건은 arr.length/2로 잡으면 된다.

  //배열 다 더하기
  let sumList = arr.reduce(function (sum, value) {
    return sum + value;
  });

  if (sumList < num) return 0;

  let removeItem = 0;
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    if (arr[0] - arr[arr.length - 1] > 0) {
      removeItem = arr.splice(arr.length - 1, 1);
      sumList -= removeItem;
    } else {
      removeItem = arr.splice(0, 1);
      sumList -= removeItem;
    }

    if (sumList < num) return arr.length + 1;
  }

  return null;
}

//console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); //5

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11));
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95));
