// 입력: [[4,5],[4,8],[10,14],[11,13],[5,12],[3,7],[1,4]]
// 출력: 3
//s,e 좌표는 포함하면 안된다. => 겹치는구간이 있는것들을 파악한다.
// [1,4] - 1번 영역
// [4,5] [4,8] [5,12] - 2번 영역
// [10,14] [11,13] - 3번 영역

//[3,7]은 어디에 들어가는게 적절한가?
// [1,4]에는 들어갈 수 없다. => [1,4]에는 2,3이 가능한 숫자이지만 [3,7]에 가능한 숫자는 2,4,5,6이기 때문

//사실 상관이 없을지도?

function solution(input) {
  var answer = 1;
  var empty_list = [];
  const format_list = input.sort((a, b) => {
    return b[0] - a[0];
  });
  for (var i = 0; i < format_list.length - 1; i++) {
    const s = empty_list.length === 0 ? format_list[i][0] : empty_list[0];
    const e = empty_list.length === 0 ? format_list[i][1] : empty_list[1];
    const futureS = format_list[i + 1][0];
    const futureE = format_list[i + 1][1];
    console.log(s, e, futureS, futureE);
    if ((futureS <= s && s < futureE) || (futureS < e && e <= futureE)) {
      empty_list = [s, e, futureS, futureE];
      empty_list = empty_list.sort((a, b) => a - b).slice(1, 3);
      console.log(empty_list);
    } else {
      answer += 1;
      empty_list = [];
    }
  }

  console.log(answer);
  return answer;
}

solution([
  [4, 5],
  [4, 8],
  [10, 14],
  [11, 13],
  [5, 12],
  [3, 7],
  [1, 4],
]);
