let arr=[3,4,5,6,7]
let t=11
let found=false

for(let i=0;i<arr.length-1;i++){
  for(let j=i+1;j<arr.length;j++){
    if(arr[i]+arr[j]===t){
        found=true 
        console.log(arr[i],arr[j])
        break
    }
  }
  if(found) break
}
if(found) console.log("two sum")
else console.log("not")