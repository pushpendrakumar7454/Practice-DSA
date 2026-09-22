let promt=require("prompt-sync")()

let n=Number(promt("Enter a number-: "))


for(let i=1;i<=n;i++){
    for(let j=1;j<=n-i+1;j++){
        process.stdout.write("* ")
    }
    console.log()
}