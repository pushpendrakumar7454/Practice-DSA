let prompt=require("prompt-sync")()

let num=Number(prompt("Enter the number-: "))
let isPrime=true

if(num<2){
   isPrime=false
}
for(let i=2;i<num;i++){
    if(num%i==0){
       isPrime=false
       break
    }
}

if(isPrime){
    console.log("prime number")
}else{
    console.log("not prime")
}