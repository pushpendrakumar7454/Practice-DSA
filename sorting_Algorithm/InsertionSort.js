let arr=[2,32,35,31,2,455,45]
let n=arr.length

for(let i=0;i<n-1;i++){
    let key=arr[i]
    let j=i-1
    while(j>=0 && arr[j]>key){
        arr[j+1]=arr[j]
        j--
    }
    arr[j+1]=key
}

console.log(arr)