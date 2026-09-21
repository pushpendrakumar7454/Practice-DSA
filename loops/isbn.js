let prompt=require("prompt-sync")()

let num=Number(prompt("enter the number-: "))
let temp=num
let count=0

while(temp>0){
    count++
    temp=Math.floor(temp/10)
}

if(count!=10) console.log("Not isbn Number")
else {
     let ans=0  
      while(num>0){
        let digit=num%10
        ans=ans+(digit*count)
        count--
        num=Math.floor(num/10)
    }

    console.log(ans%11==0 ?"Valid Isbn Number":"Not Valid isbn")

}