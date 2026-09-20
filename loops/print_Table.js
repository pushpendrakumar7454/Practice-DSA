let prompt =require("prompt-sync")()

let num=Number(prompt("Enter your num -: "))


for(let i=1;i<=10;i++){
    console.log(`${num} X ${i} = ${num*i}`)
}