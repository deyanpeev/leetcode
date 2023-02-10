const WEIGTHED_DIGITS = {
  'I': 1, 
  'V': 5, 
  'X': 10, 
  'L':50, 
  'C':100, 
  'D':500, 
  'M':1000
}
const ORDERED_DIGITS = Object.keys(WEIGTHED_DIGITS);

var romanToInt = function(s) {
  let sum = 0;
  for(let i = 0; i < s.length; i++) {
    if(i < s.length-1 && ORDERED_DIGITS.indexOf(s[i]) < ORDERED_DIGITS.indexOf(s[i+1])) {
      sum-=WEIGTHED_DIGITS[s[i]];
    } else {
      sum+=WEIGTHED_DIGITS[s[i]]
    }
  }

  return sum;
};

console.log(romanToInt('XXV'));