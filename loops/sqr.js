let prompt=require("prompt-sync")()

let num=Number(prompt("Enter a number-: "))
let found=false

for(let i=0;i<num;i++){
    if(i*i===num){
      console.log(i)
      found=true
      break
    }
}

if(found==false){
    console.log("not squre root of found")
}