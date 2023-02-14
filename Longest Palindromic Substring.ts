function longestPalindrome(s: string): string {
  if(!s || !s.length) {
    return '';
  }
  let longest = s[0];
  for(let i = 0; i < s.length-1; i++) {
    for(let j = i+1; j < s.length; j++) {
      let palindrom = s.substring(i, j + 1);
      if(isPalindrom(palindrom) && palindrom.length > longest.length) {
        longest = palindrom;
      }
    }
  }
  return longest;
};

function isPalindrom(s: string): boolean {
  for(let i = 0; i < s.length/2; i++) {
    if(s[i] !== s[s.length-1-i]) {
      return false;
    }
  }

  return true;
}

let s = 'bb';
console.log(longestPalindrome(s));