function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }

  let arr = s.split("");

  for (let i = 0; i < arr.length; i++) {
    if (!parseInt(arr[i]) && parseInt(arr[i]) !== 0) {
      return false;
    }
  }

  return true;
}
