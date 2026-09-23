//first approach
// let arr=[4,5,6,2,45]

// let rev=[]

// for(let i=arr.length-1;i>=0;i--){
//     rev.push(arr[i])
// }

// console.log(rev)
  

//second approach
// let arr=[5,6,8,4,2]
// let temp=new Array(arr.length)
// let i=arr.length-1

// for(let j=0;j<arr.length;j++){
//     temp[j]=arr[i]
//     i--
// }

// console.log(temp)

//third approach
let arr=[34,4,6,888,4,3]
let i=0;
let j=arr.length-1

while(i<j){
    let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
    j--
    i++
}

console.log(arr)