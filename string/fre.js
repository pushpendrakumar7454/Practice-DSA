let s='naman'
let fre={}

for(let i=0;i<s.length;i++){
    let ch=s.charAt(i)

    if(fre[ch]){
        fre[ch]++
    }else{
        fre[ch]=1
    }

}

console.log('====================================');
console.log(fre);
console.log('====================================');