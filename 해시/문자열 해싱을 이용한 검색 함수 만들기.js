// 쿼리 리스트에 있는 문자열이 스타링 리스트에 있으면 true, 없으면 false

// 소문자로만 구성
// 문자열 최대 길이 10^6
// 해시 충돌은 존재하지 않음.

function hash(value) {
  const p = 31;
  const m = 1000000007;

  let hashValue = 0;
  for (let x of value) {
    const code = x.charCodeAt(0);
    hashValue = (code + p * hashValue) % m;
  }
  return hashValue;
}

function solution(stringList, hashList) {
  let results = [];
  const hashTable = stringList.map((str) => hash(str));

  for (let x of hashList) {
    const hashQuery = hash(x);
    if (hashTable.includes(hashQuery)) {
      results.push(true);
    } else {
      results.push(false);
    }
  }
  return results;
}

console.log(
  solution(["apple", "banana", "cherry"], ["banana", "kiwi", "melon", "apple"]),
); //true false false true
