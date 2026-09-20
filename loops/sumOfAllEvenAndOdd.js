let prompt=require("prompt-sync")()

let num=Number(prompt("enter your number-: "))
let EvenSum=0;
let oddSum=0 
for(let i=1;i<=num;i++){
    if(i%2==0){
        EvenSum+=i
    }else{
        oddSum+=i
    }
}

console.log("Even Sum",EvenSum)
console.log("Odd Sum",oddSum)