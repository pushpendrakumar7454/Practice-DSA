let prompt=require("prompt-sync")()

let num=Number(prompt("Enter the number-: "))

function SOD(num){
    if(num==0) return 0

    return (num%10)+SOD(Math.floor(num/10))
}
console.log(SOD(num))