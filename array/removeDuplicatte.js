let arr = [2,3,3,4,4,5,5,6]
let temp = []

for(let i=0;i<arr.length;i++){
    let count=0;
    for(let j=0;j<temp.length;j++){
        if(arr[i]==temp[j]){
            count++
        }
    }
    if(count==0){
        temp.push(arr[i])
    }
}

console.log(temp)