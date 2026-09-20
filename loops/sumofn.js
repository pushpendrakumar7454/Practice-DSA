let prompt =require("prompt-sync")()

let num=Number(prompt("enter your num-: "))

let sum=0


for(let i=0;i<=num;i++){
    sum+=i
}
//5=0+1+2+3+4+5=15
console.log(sum)