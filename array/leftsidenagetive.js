let arr=[3,4,-5,-4,2,-3,4]
let i=0;
let j=arr.length-1

while(i<j){
    if(arr[i]>0){
        let temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp
        j--
    }else{
        i++
    }
}
console.log(arr)