const prompt=require("prompt-sync")()

let num=Number(prompt("Enter a num-: "))
let sq=num*num
let temp=num
let digit=1
while(temp>0){
    digit=digit*10
    temp=Math.floor(temp/10)
}

if(sq%digit===num){
    console.log("automorphic")
}else console.log("not automorphic")