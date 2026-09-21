const prompt=require("prompt-sync")()

let num=Number(prompt("ENter a number-: "))
let temp=num
let sum=0

while(temp>0){
    let digit=temp%10
    let fact=1

    for(let i=1;i<=digit;i++){
        fact*=i
    }
    sum=sum+fact

    temp=Math.floor(temp/10)
}


if(sum==num) console.log("Strong number")
    else console.log("Not A strong Number")