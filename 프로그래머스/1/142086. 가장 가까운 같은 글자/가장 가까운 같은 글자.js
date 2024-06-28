function solution(s) {
    var answer = [];
    let before=[]
    for(let i=0;i<s.length;i++){
        let index=before.indexOf(s[i])
        if(index!==-1){
            index+=1
        }
        answer.push(index)
        before.unshift(s[i])
    }
    console.log(answer)
    return answer;
}