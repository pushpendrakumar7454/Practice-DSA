let arr=[3,4,0,4,0]

for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-1;j++){
        if(arr[j]<arr[j+i]){
            let temp=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
        }
    }
}
console.log(arr)