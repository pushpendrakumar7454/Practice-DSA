let arr=[4,5,5,6,7,4]

let map=new Map()

for(let i=0;i<arr.length;i++){
    if(map.has(arr[i])){
       map.set(arr[i],map.get(arr[i])+1)
    }else{
        map.set(arr[i],1)
    }
}

console.log(map)