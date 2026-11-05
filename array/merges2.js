let arr1=[2,3,4,5,6]
let arr2=[7,8,6,9,1]

for(let i=0;i<arr2.length;i++){
    arr1.push(arr2[i])
}

for(let i=0;i<arr1.length;i++){
    for(let j=i+1;j<arr1.length;j++){
        if(arr1[i]>arr1[j]){
            let temp=arr1[i]
            arr1[i]=arr1[j]
            arr1[j]=temp
        }
    }
}

console.log(arr1)