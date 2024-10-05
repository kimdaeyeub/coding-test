function solution(array, commands) {
    var answer = [];
    for(let i=0;i<commands.length;i++){
        const [n,m,k]=commands[i]
        let temp=[]
        for(let j=0;j<array.length;j++){
            if(j>=n-1&&j<=m-1){
                temp.push(array[j])
            }
        }
        temp=temp.sort((a,b)=>a-b)
        let num=temp[k-1]
        answer.push(num)
    }
    return answer;
}