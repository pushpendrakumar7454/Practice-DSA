let prompt=require("prompt-sync")()

let num=Number(prompt("Enter a number-: "))
let temp=num*num
let sum=0


while(temp>0){
    let digit=temp%10
    sum=sum+digit
    temp=Math.floor(temp/10)

}

if(sum==num) console.log("neon number")
else console.log("not neon number")