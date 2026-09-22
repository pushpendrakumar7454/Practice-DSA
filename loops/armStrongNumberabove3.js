let prompt=require("prompt-sync")()
let num=Number(prompt("Enter a number-: "))
let temp=num
let sum=0
let count=0

while(temp>0){
    count++
    temp=Math.floor(temp/10)
}
temp=num

while(temp>0){
    let digit=temp%10
     sum=sum+Math.pow(digit,count)
     temp=Math.floor(temp/10)
}

if(sum==num) console.log("Armstrong Number")
else console.log("Not armstrong number")