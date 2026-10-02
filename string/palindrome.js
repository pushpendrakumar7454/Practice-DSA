let s='naman'
let i=0;
let j=s.length-1

let isPalindrome=true

while(i<j){
    if(s.charAt(i)!=s.charAt(j)){
        isPalindrome=false
        break
    }
    i++
    j--
}

console.log(isPalindrome?"Palindrome":"notPalindrome")
