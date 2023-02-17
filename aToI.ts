const MAX_INTEGER = 2**31-1;
const MIN_INTEGER = 2**31*-1;
const NUMBERS = '0123456789';

function myAtoi(s: string): number {
  s = s.trim();
  let factor = 1;
  let result = 0;
  for(let i = 0; i < s.length; i++) {
    if(i === 0 && (s[i] === '-' || s[i] === '+')) {
      if(s[i] === '-'){
        factor = -1;
      }
    } else if(!NUMBERS.includes(s[i])) {
      break;
    } else {
      let number = +s[i];
      if(number === 0 && result === 0) {
        continue;
      }
      result = result * 10 + number;
    }
    if(factor < 0 && result * factor <= MIN_INTEGER) {
      console.log('here');
      return MIN_INTEGER;
    }
    if(result > MAX_INTEGER) {
      console.log(result * factor);
      return MAX_INTEGER;
    }
  }

  return result * factor;
};

console.log(myAtoi('-2147483647'));