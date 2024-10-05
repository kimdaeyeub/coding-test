// process.stdin.setEncoding('utf8');
// process.stdin.on('data', data => {
//     const n = data.split(" ");
//     const a = Number(n[0]), b = Number(n[1]);
//     console.log(a);
//     console.log(b);
// });

const fs=require('fs')

const [n,m]=fs.readFileSync('/dev/stdin').toString().trim().split(" ")
let answer=""

for(let j=0;j<m;j++){
    for(let i=0;i<n;i++)answer+="*"    
    answer+="\n"
}
console.log(answer)