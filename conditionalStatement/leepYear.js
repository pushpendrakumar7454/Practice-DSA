let promt=require("prompt-sync")()

const year=Number(promt("Enter your year  "))

if((year%4==0 && year%100!==0) || (year%400==0)) console.log("leep Year")
    else console.log("not leep Year")