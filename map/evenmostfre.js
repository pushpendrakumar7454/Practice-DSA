let arr=[3,4,5,5,4,6,6]
let map=new Map()

for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        if(map.has(arr[i])){
          map.set(arr[i], map.get(arr[i])+1)
        }else{
            map.set(arr[i],1)
        }

    }
}
let fre=0
let ans=-1

for( key of map.keys()){
    if(fre<map.get(key)){
        fre=map.get(key)
        ans=key
    }else if(fre===map.get(key)){
        ans=Math.min(ans,key)
    }
}

console.log('====================================');
console.log(ans);
console.log('====================================');