function isHappy(n){
    let set=new Set()

    while(true){
        let sum=0
        while(n>0){
            let dig=n%10
            sum+=dig*dig
            n=Math.floor(n/10)
        }

        if(sum===1) return "Happy number"
        if(set.has(sum)) return "Not happy number"
        set.add(sum)
        n=sum
    }
}

console.log(isHappy(19))