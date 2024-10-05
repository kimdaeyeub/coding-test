function solution(n) {
    var answer = 0;
    let three=n.toString(3)
    let threeReverse=three.split("").reverse()
    answer=parseInt(threeReverse.join(""),3)
    return answer;
}