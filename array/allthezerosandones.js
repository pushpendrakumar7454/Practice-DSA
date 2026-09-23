let arr=[0,1,1,0,1,0,1]
let i=0
let j=arr.length-1

while(i<j){
    if(arr[i]==0){
        let temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp
        i++
        j--
    }else{
        i++
    }
}

console.log(arr)