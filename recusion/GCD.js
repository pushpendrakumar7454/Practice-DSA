function GCD(a,b,n){
    if(n===1) return 1
    if(a%n==0 && b%n==0) return n
    return GCD(a,b,n-1)
}

console.log(GCD(20,36,Math.min(36,20)))