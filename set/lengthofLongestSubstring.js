function lengthOfLongestSubstring(str) {
  let fre = {};
  let count = 0;
  let j = 0;
  let maxString = 0;

  for (let i = 0; i < str.length; i++) {
    let word = str[i];
    if (fre[word]) {
      fre[word]++;
    } else {
      fre[word] = 1;
    }

    while (fre[word] > 1) {
      let remove = str[j];
      fre[remove]--;
      j++;
    }

    count = i - j + 1;
    if (count > maxString) {
      maxString = count;
    }
  }

  return maxString;
}

console.log(lengthOfLongestSubstring("aabdef"));
