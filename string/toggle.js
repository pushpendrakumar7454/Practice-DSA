let promt=require("prompt-sync")()
let s=promt("Enter your string-: ")

let ans=""

for(let i=0;i<s.length;i++){
    let ascii=s.charCodeAt(i)

    if(ascii>=65 && ascii<=90){
        ans=ans+String.fromCharCode(ascii+32)
    }else{
        ans=ans+String.fromCharCode(ascii-32)
    }
}

console.log(ans)