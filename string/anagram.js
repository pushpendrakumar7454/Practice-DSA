const s = "are";
const s1 = "ear";
let fre = {};

if (s.length !== s1.length) console.log("Not angram");
else {
  for (let i = 0; i < s.length; i++) {
    let word = s[i];

    if (fre[word]) {
      fre[word]++;
    } else {
      fre[word] = 1;
    }
  }
  for (let i = 0; i < s1.length; i++) {
    let word = s1[i];
    if (fre[word]) {
      fre[word]--;
    } else {
      console.log("not angram");
      break;
    }
  }
  let isAnagram = true;

  for (let key in fre) {
    if (fre[key] !== 0) {
      isAnagram = false;
      break;
    }
  }

  if (isAnagram) console.log("Anagram");
  else console.log("Not anagram");
}
