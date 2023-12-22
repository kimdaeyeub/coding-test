//다중 포인터 - isSubsequence
//두 문자열을 받아 첫 번째 문자열의 문자가 두 번째 문자열의 문자의 일부에 포함되는지 확인하는 isSubsequence라는 함수를 작성합니다. 즉, 이 함수는 첫 번째 문자열의 문자가 순서가 바뀌지 않고 두 번째 문자열의 어딘가에 나타나는지 확인해야 합니다.
//
//예시:
//
//isSubsequence('hello', 'hello world'); // true
//isSubsequence('sing', 'sting'); // true
//isSubsequence('abc', 'abracadabra'); // true
//isSubsequence('abc', 'acb'); // false (order matters)
//솔루션에는 최소한 다음과 같은 복잡성이 있어야 합니다:
//
//Time Complexity - O(N + M)
//
//Space Complexity - O(1)

function isSubsequence(str1, str2) {
  if (str2.length < str1.length) return false;

  str1 = str1.split("");
  str2 = str2.split("");

  let pointer = 0;

  for (let i = 0; i < str2.length; i++) {
    if (str2[i] === str1[pointer]) {
      str1.splice(pointer, 1);
    }
  }

  if (str1.length === 0) {
    return true;
  }

  return false;
}

console.log(isSubsequence("abc", "abracadabra")); // true

console.log(isSubsequence("abc", "acb")); // false (order matters)
