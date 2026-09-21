const prompt=require("prompt-sync")()

let num=Number(prompt("Enter a number-: "))
let temp=num
let rev=0

while(temp>0){
    let digit=temp%10
    rev=(rev*10)+digit
    temp=Math.floor(temp/10)
}

console.log(rev)