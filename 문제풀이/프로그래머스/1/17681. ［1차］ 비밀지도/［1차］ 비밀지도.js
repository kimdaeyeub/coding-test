function transform(arr, n) {
  arr = arr.map((item, index) => {
    let binaItem = item.toString(2);
    if (binaItem.length === n) {
      return binaItem;
    } else {
      let need = n - binaItem.length;
      let list = [];
      for (let i = 0; i < need; i++) {
        list.push("0");
      }
      list.push(binaItem);

      return list.join("");
    }
  });
  return arr;
}

function solution(n, arr1, arr2) {
  var answer = [];
  arr1 = transform(arr1, n);
  arr2 = transform(arr2, n);
  for (let i = 0; i < arr1.length; i++) {
    let char1 = arr1[i];
    let char2 = arr2[i];
    let list = [];
    for (let a = 0; a < char1.length; a++) {
      if (char1[a] === "0" && char2[a] === "0") {
        list.push(" ");
      } else {
        list.push("#");
      }
    }
    answer.push(list.join(""));
  }
  return answer;
}
