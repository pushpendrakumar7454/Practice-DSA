let prompt=require("prompt-sync")()

let num=Number(prompt("Enter a number-: "))

if(num==0 || num==1){
    console.log("not prime factors")
}

for(let i=2;i<=num;i++){
    while(num%i==0){
        console.log(i)
        num=num/i
    }
}