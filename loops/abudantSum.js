const prompt=require("prompt-sync")()

let num=Number(prompt("Enter a number-: "))
let sum=0
for(let i=1;i<num;i++){
    if(num%i==0){
        sum=sum+i
    }
}

if(sum>num) console.log("abudant Number")
else console.log("Not Abudant number")