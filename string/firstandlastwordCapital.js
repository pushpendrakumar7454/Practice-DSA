let s="hello bhai kya hal chal"

let arr=s.split(" ")
let ans=""

for(let i=0;i<arr.length;i++){
    let word=arr[i]
    let first=word.charAt(0).toUpperCase()
    let mid=word.substring(1,word.length-1)
    let last=word.charAt(word.length-1).toUpperCase()

    ans=ans+(first+mid+last)+" "
}
console.log(ans)