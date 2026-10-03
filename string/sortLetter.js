let s="taj mahal is situated at agra"
let arr=s.split(" ")
let n=arr.length

for(let i=0;i<n-1;i++){
    for(let j=0;j<n-1-i;j++){
        if(arr[j+1]<arr[j]){
            let temp=arr[j+1]
            arr[j+1]=arr[j]
            arr[j]=temp
        }
    }
}

console.log(arr.join(" "))