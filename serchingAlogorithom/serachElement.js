//liner Search

let arr=[1,3,4,5,7,89,4,5]
let t=89
let index=-1
for(let i=0;i<arr.length;i++){
    if(arr[i]===t){
      index=i
      break
    }
}

if(index==-1) console.log("not found")
    else console.log(`element founded of index ${index}`)