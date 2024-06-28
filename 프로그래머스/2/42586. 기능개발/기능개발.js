function solution(progresses, speeds) {
    var answer = [];
    let arr=[];
    for(let i=0;i<progresses.length;i++){
        arr.push(Math.ceil((100-progresses[i])/speeds[i]))
    }
    
    while(arr.length!==0){
        
        arr=arr.map(item=>item-arr[0])
        let count=0
        while(arr[0]<=0){
            arr.shift()
            count++
        }
        answer.push(count)
    }
    return answer;
}