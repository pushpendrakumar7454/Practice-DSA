

let arr=[4,8,10,12,45]
let target=22


function twoSUm(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]===target){
                return [i,j]
            }
        }
    }
}

console.log(twoSUm(arr))