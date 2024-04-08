function solution(elements) {
  const leng = elements.length;
  let arr = [];
  for (let i = 0; i < elements.length * 2 - 1; i++) {
    if (i >= elements.length) {
      arr.push(elements[i - elements.length]);
    } else {
      arr.push(elements[i]);
    }
  }
  let set = new Set();
  for (let i = 1; i <= leng; i++) {
    for (let a = 0; a < leng; a++) {
      let num = 0;
      for (let b = 0; b < i; b++) {
        num += arr[a + b];
      }
      set.add(num);
    }
  }
  return set.size;
}