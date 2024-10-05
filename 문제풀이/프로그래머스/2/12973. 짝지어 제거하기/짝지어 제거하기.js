function solution(s){
    
    let stack=[]
    for(let x of s.split("")){
        if(stack.length===0||stack[stack.length-1]!==x){
            stack.push(x)
        }else{
            stack.pop()
        }
                
    }
    
    if(stack.length===0){
        return 1
    }else{
        return 0
    }
   
}