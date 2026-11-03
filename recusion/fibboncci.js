let prompt=require("prompt-sync")()

let num=Number(prompt("Enter the Num-: "))

function febbonacci(first=0,second=1,num){
    if(num===0) return 

    let third=first+second
    process.stdout.write(third+" ")
    first=second
    second=third
    febbonacci(first,second,num-1)
}

febbonacci(0,1,num)