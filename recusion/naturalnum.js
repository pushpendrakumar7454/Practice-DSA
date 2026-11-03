let prompt=require("prompt-sync")()

const num=Number(prompt("Enter your number-: "))

function naturalNum(num){
    if(num===0) return 

    sum(num-1)
    console.log(num)
}

naturalNum(num)