function solution(participant, completion) {
    var answer = '';
    participant=participant.sort()
    completion=completion.sort()
    for(let i=0;i<participant.length;i++){
        if(participant[i]!==completion[i]){
            answer=participant[i]
            break
        }
    }
    return answer;
}