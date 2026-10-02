let s='naman'

let i=0; 
let j=s.lenght-1
let isPalindrome=true

while(i<j){
    if(s.charAt(i)!=s.charAt(j)){
        isPalindrome=false
        break
    }
}

console.log(isPalindrome?"String is Palindrome":"String is Not Palindrome")
