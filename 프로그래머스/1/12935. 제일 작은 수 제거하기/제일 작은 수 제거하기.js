function solution(arr) {
    var answer = [];
    
    if(arr.length===1){
        answer.push(-1);
        return answer;
    }
    
   const min = Math.min(...arr);
    
    return arr.filter(num => num !== min);



}