function solution(answers) {
    var answer = [];
    let graph=[
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ]
    let score=[0,0,0]
    

        for (let i=0;i<answers.length;i++){
            if(answers[i]===graph[0][i%(graph[0].length)]){
                score[0]+=1
            }
            if(answers[i]===graph[1][i%(graph[1].length)]){
                score[1]+=1
            }
            if(answers[i]===graph[2][i%(graph[2].length)]){
                score[2]+=1
            }
        }
    
    const maxScore=Math.max(...score)
    score.map((item,index)=>{
        if(item===maxScore){
            answer.push(index+1)
        }
    })
    return answer;
}

//5
//8
//10