let arr=[3,4,56,6]
let t=62
let map=new Map()
let ans=[]

for(let i=0;i<arr.length;i++){
    if(map.has(t-arr[i])){
        ans.push(map.get(t-arr[i]))
        ans.push(i)
        break
    }else{
        map.set(arr[i],i)
    }
}

console.log(ans)