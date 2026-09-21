let prompt=require("prompt-sync")()

let num=Number(prompt("Enter a number-: "))
let count=0
while(num>0){
    count++
    num=Math.floor(num/10)
}

console.log(count)