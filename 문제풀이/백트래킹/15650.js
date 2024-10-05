const fs = require("fs");

const [n, m] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")[0]
  .split(" ")
  .map(Number);

let selected = []; //현재 단계에서 사용하기 위한 배열 ex) [1,2,3]
let visited = new Array(m).fill(false); // 한 단계에서 중복을 방지하기 위한 불리언 배열
let result = []; //이전 단계에서 해당 조합이 사용되었는지 알기 위해 이전 데이터들을 넣는 공간

function dfs(arr, depth) {
  if (depth === m) {
    let str = ""; //출력을 위한 변수
    let temp = []; // 정렬을 위한 현재 단계의 숫자를 임시로 저장한 공간
    let tempStr = ""; //정렬을 거친후 임시로 저장된 문자열
    for (let x of selected) {
      //정렬을 하기 위한 배열 생성과정
      temp.push(x);
    }
    temp = temp.sort((a, b) => a - b); //정렬중
    tempStr = temp.join(""); //정렬한 배열을 하나의 문자열로 변환
    if (!result.includes(tempStr)) {
      // result에 해당 문자열이 있다면 한번 사용된 조합이기 때문에 건너뛰고 그렇지 않을 경우 result에 해당 조합을 업데이트 해주고 값을 출력해주는 단계
      result.push(tempStr);
      for (let i of selected) {
        str += i + " ";
      }
      console.log(str);
    }
    temp = [];
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (visited[i]) continue; //하나의 출력문에 중록된 숫자 사용을 방지하기 위해 visited를 통해 검증
    visited[i] = true; // 사용된 문자인지 확인하기 위해 값 업데이트
    selected.push(i); //현재의 단계에서 사용하기 위한 숫자를 저장하는 공간
    dfs(arr, depth + 1); //재귀함수
    visited[i] = false; // 다음 시작문자를 시작하기 전에 방문이 이루어진 값들을 초기화
    selected.pop(); //현재 단계에서 사용했던 값들을 지우는 단계
  }
}

dfs(n, 0);
