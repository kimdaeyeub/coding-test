//빈도수 세기 - sameFrequency
//sameFrequency라는 함수를 작성하세요. 두 개의 양의 정수가 주어졌을 때, 두 숫자의 자릿수가 같은 빈도를 갖는지 구합니다.
//
//
//여러분의 솔루션은 반드시 다음과 같은 복잡성을 가져야 합니다.:
//
//Time: O(N)
//
//예시 인풋:
//
//sameFrequency(182,281) // true
//sameFrequency(34,14) // false
//sameFrequency(3589578, 5879385) // true
//sameFrequency(22,222) // false

function sameFrequency(num1, num2) {
  num1 = num1.toString().split("");
  num2 = num2.toString().split("");

  if (num1.length !== num2.length) return false;

  for (let i = 0; i < num1.length; i++) {
    const value = num2.includes(num1[i]);
    if (!value) return false;
    const index = num2.indexOf(num1[i]);
    num2.splice(index, 1);
  }

  return true;
}

console.log(sameFrequency(11090, 9121));
