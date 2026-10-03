function isStrong(n){
    let temp=n
    let ans=0

    while(n>0){
        let dig=n%10
        let fact=1

        for(let i=1;i<=dig;i++){
            fact*=i
        }
        
        ans=ans+fact
        n=Math.floor(n/10)
    }

    return temp==ans?"Strong Number":"Not strong number"
}

console.log(isStrong(145))