const SORTED_DIGITS = {
  1: 'I', 
  4: 'IV',
  5: 'V', 
  9: 'IX',
  10: 'X',
  40: 'XL', 
  50: 'L', 
  90: 'XC',
  100: 'C',
  400: 'CD', 
  500: 'D', 
  900: 'cM',
  1000: 'M',
}
const ORDERED_SUBRACTORS = Object.keys(SORTED_DIGITS);

function intToRoman(num) {
  let result = '';
  for(let i = ORDERED_SUBRACTORS.length - 1; i >= 0; i--) {
    let subractor = ORDERED_SUBRACTORS[i];
    while(num - subractor >= 0) {
      result+=SORTED_DIGITS[subractor];
      num-=subractor;
    }
  }

  return result;
};

console.log(intToRoman(1994))