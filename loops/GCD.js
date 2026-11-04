let prompt=require("prompt-sync")()

let a=Number(prompt("Enter a first number-: "))
let b=Number(prompt("Enter a second number-: "))


while(a!=b){
    if(a>b) a=a-b
    else b=b-a
}
console.log(a)




//BRUTE FORCE
// let a=Number(prompt("Enter a first number-: "))
// let b=Number(prompt("Enter a second number-: "))

// let c=Math.min(a,b)

// for(let i=c;i>=1;i--){
//     if(a%i==0 && b%i==0){
//       console.log(i)
//       break
//     }
// }