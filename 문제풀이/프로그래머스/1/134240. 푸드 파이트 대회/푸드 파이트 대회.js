function solution(food) {
    var answer = '';
    food=food.map(item=>{
        if(item%2===0){
            return item
        }else{
            return item-1
        }
    })
    if(food[0]===0){
        food.shift()
    }
    food=food.map(item=>item/2)
    let temp=[]
    for(let i=0;i<food.length;i++){
        let str=""
        if(food[i]===0)continue
        for(let j=1;j<=food[i];j++){
            str+=i+1
        }
        temp.push(str)
    }
    answer=temp.join("")+"0"+temp.reverse().join("")
    return answer;
}