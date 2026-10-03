const s = "I am learning JavaScript programming";

let arr=s.split(" ")
let maxCount=""

for(let i=0;i<arr.length;i++){
    if(arr[i].length>maxCount.length){
        maxCount=arr[i]
    }
}
console.log(maxCount)