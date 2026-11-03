let prompt=require("prompt-sync")()

let num=Number(prompt("Enter the number-: "))


function fibbonacci(first=0,second=1,num){
    if(num==0) return
    
    let third=first+second
    process.stdout.write(first+" ")
    fibbonacci(second,third,num-1)
}

fibbonacci(0,1,num)

// function fibbonacci(first=0,second=1,num){
//     if(num==0) return

//    let third=first+second
//    process.stdout.write(first + " ")
//    first=second
//    second=third
//    fibbonacci(first,second,num-1)
// }


// fibbonacci(0,1,num)