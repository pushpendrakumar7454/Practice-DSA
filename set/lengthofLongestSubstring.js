function lengthOfLogestSubstring(str){
    let fre={}
    let j=0
    let count=0
    let maxLength=0

    for(let i=0;i<str.length;i++){
        let word=str[i]
        
        if(fre[word]){
            fre[word]++
        }else{
            fre[word]=1
        }

        while(fre[word]>1){
            let remove=str[j]
            fre[remove]--
            j++

            
        }
        count=i-j+1
            if(count>maxLength){
                maxLength=count
            }
    }
    
    return maxLength
}

console.log(lengthOfLogestSubstring("aaab"))