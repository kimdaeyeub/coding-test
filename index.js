// 등산가 김강산은 가족들과 함께 캠핑을 떠났다. 하지만, 캠핑장에는 다음과 같은 경고문이 쓰여 있었다.
//캠핑장은 연속하는 20일 중 10일동안만 사용할 수 있습니다.
//강산이는 이제 막 28일 휴가를 시작했다. 이번 휴가 기간 동안 강산이는 캠핑장을 며칠동안 사용할 수 있을까?
//강산이는 조금 더 일반화해서 문제를 풀려고 한다.
//캠핑장을 연속하는 P일 중, L일동안만 사용할 수 있다. 강산이는 이제 막 V일짜리 휴가를 시작했다. 강산이가 캠핑장을 최대 며칠동안 사용할 수 있을까? (1 < L < P < V)

const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().split("\n");

const output="Case 1: 14\n" +
    "Case 2: 11"
function solution(value){
    for(let i =0;i<value.length-1;i++){
        let count=0;
        let list=value[i].split(" ")
        count=Math.floor(list[2]/list[1])*list[0]
        count+=list[2]%list[1]
        console.log(`Case ${i+1}: ${count}`);
    }
}

solution(input)

