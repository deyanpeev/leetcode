function lengthOfLongestSubstring(s: string): number {
  let longestSequence = 0;
  for(let i = 0; i < s.length; i++) {
    let currentSub = '';
    for(let j = i; j < s.length; j++) {
      if(currentSub.includes(s[j])) {
        break;
      }
      currentSub += s[j];
      if(currentSub.length > longestSequence) {
        longestSequence = currentSub.length;
      }
    }
  }

  return longestSequence;
};

let str = 'pwwkew';
console.log(lengthOfLongestSubstring(str))