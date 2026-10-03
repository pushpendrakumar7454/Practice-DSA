let s='ate'
let s1='tea'
let fre={}

if(s.length!==s1.length) console.log("Not anagram")
else{

    for(let i=0;i<s.length;i++){
        let ch=s[i]

        if(fre[ch]){
            fre[ch]++
        }else{
            fre[ch]=1
        }
    }

    for(let i=0;i<s1.length;i++){
        let ch=s1[i]

        if(fre[ch]){
            fre[ch]--
        }else{
            console.log("Not Anagram")
            break
        }
    }

    let isAnagram=true
    for(let key in fre){
        if(fre[key]!==0){
            isAnagram=false
            break
        }
    }

    if(isAnagram) console.log("Anagram")
    else console.log("Not anagram")
}    