let promt=require("prompt-sync")()

let num=Number(promt("Enter a number-: "))
let pow=Number(promt("Enter a power-: "))

let result=1

for(let i=1;i<=pow;i++){
    result=result*num
}

console.log(result)