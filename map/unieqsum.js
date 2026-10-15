let  arr=[1,2,3,4,1,2,3,4,6,7]
let map=new Map()

for(let i=0;i<arr.length;i++){
    if(map.has(arr[i])){
       map.set(arr[i],map.get(arr[i])+1)
    }else{
        map.set(arr[i],1)
    }
}
let sum=0
for(let key of map.keys()){
    if(map.get(key)===1){
        sum+=key
    }
}
console.log('====================================');
console.log(sum);
console.log('====================================');