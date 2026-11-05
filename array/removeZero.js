let arr = [1,2,3,0,3,0,3,0,4]

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]==0){
            let temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
        }
    }
    if(arr[i]==0){
        arr.pop()
        i--
    }
}
console.log(arr)