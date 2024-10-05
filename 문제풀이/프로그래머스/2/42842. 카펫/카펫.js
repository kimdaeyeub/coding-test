function solution(brown, yellow) {
    var answer = [];
    let arr=[]

    if(yellow!==1){
        for(let i=yellow;i>=1;i--){
            if(yellow%i===0){
                arr.push(i)
            }
        }
    }else{
        arr=[1,1]
    }
    
    console.log(arr)
    
    arr=arr.splice(0,Math.ceil(arr.length/2))
    console.log(arr)
    
    for(let x of arr){
        const y=yellow/x
        if(2*x+4+y*2===brown){
            answer=[2+x,y+2]
        }
    }
    return answer;
}

// 0 0 0 0 0 0 0 0 0
// 0 1 1 1 1 1 1 1 0
// 0 1 1 1 1 1 1 1 0
// 0 1 1 1 1 1 1 1 0
// 0 1 1 1 1 1 1 1 0
// 0 0 0 0 0 0 0 0 0

// 1 24
// 2 12
// 3 8
// 4 6

// 1 2