let arr1=[3,4,5,6,7]
let arr2=[1,2,4,5,6]
let temp=[]
let i=0,j=0,k=0

while(i<arr1.length && j<arr2.length){
    if(arr1[i]<arr2[j]) temp[k++]=arr1[i++]
    else temp[k++]=arr2[j++]
}

while(i<arr1.length){
    temp[k++]=arr1[i++]
}
while(j<arr2.length){
    temp[k++]=arr2[j++]
}

console.log(temp)