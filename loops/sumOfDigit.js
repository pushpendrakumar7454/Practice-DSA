let promt=require("prompt-sync")()

let num=Number(promt("enter a number-: "))
let temp=num

let sum=0

while(temp>0){
    let dig=temp%10
    sum=sum+dig
    temp=Math.floor(temp/10)

}

console.log(sum)