let prompt =require("prompt-sync")()

let totalTables = Number(prompt("Enter how many tables you want to print: "));
let multiplyUpTo = Number(prompt("Enter up to which number you want to multiply: "));


for(let i=1;i<=totalTables;i++){
    for(let j=1;j<=multiplyUpTo ;j++){
        console.log(`${i} X ${j} = ${i*j}`)
    }
}