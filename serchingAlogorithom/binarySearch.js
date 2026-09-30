let prompt=require("prompt-sync")()
let t=Number(prompt("Enter your Target Element-: "))

let arr=[22,25,34,56,78]
let st=0;
let ed=arr.length-1
let index=-1

while(st<=ed){
    let mid=Math.floor((st+ed)/2)
    if(arr[mid]===t){
        index=mid
        break
    }else if(arr[mid]<t) st=mid+1
    else ed=mid-1
}

console.log(index==-1?"Not Founded":`Element founded of index ${index}`)