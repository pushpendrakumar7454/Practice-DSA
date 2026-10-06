let arr=[3,44,5,6,7,8,11]

let set=new Set()

for(let i=0;i<arr.length;i++){{
    if(arr[i]%2!==0){
        set.add(arr[i])
    }
}}

console.log(set)