let arr=[3,4,5,6,5,5,6]
let ans=arr[0],count=1

for(let i=0;i<arr.length;i++){
    if(count==0){
        ans=arr[i]
        count=1
    }

    else if(arr[i]==ans) count++
    else count--
}

console.log(ans)