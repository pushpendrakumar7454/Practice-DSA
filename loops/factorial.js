let promt=require("prompt-sync")()


let Num=Number(promt("enter your num-: "))
let factorial=1;


for(let i=1;i<=Num;i++){
    factorial*=i
}

console.log(factorial)

