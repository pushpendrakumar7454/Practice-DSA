let words=["pre","attention","auu","pay","at"]

let pre="at"
let count=0

for(let i=0;i<words.length;i++){
    if(words[i].startsWith(pre)) count++
}

console.log(count)