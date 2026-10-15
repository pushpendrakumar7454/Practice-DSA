let arr=[4,5,6,7,5,6,7,9]
let map=new Map()
let sum=0
for(let i=0;i<arr.length;i++){
    if(map.has(arr[i])){ 
       map.set(arr[i], map.get(arr[i])+1)
    }else{
        map.set(arr[i],1)
    }

}
for(let key of map.keys()){
        if(map.get(key)===1){
            sum+=key
        }
    }

console.log(sum)