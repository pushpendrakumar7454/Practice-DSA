let prompt=require("prompt-sync")()

let num=Number(prompt("Enter a number-: "))
let temp=num
let sum=0

while(temp>0){
    let digit=temp%10
    sum=sum+Math.pow(digit,3)
    temp=Math.floor(temp/10)
}


if(sum==num) console.log("ArmStrong Number")
else console.log("Not armStrong Number")    