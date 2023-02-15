const MINUS_SIGN_REGEX = /^-\d+/;

function reverse(x: number): number {
  const asString = x.toString();
  const sign = MINUS_SIGN_REGEX.test(asString) ? asString[0] : ''
  const asArray = sign ? asString.substring(1, asString.length).split('') : asString.split('');
  const reversed = asArray.reverse();
  if(sign) {
    reversed.unshift(sign);
  }

  const result = +(reversed.reduce((res, i) => res+i, ''))
  if(result > Math.pow(2, 31) - 1 || result < Math.pow(2,31) * -1) {
    return 0;
  }

  return result;
};

console.log(reverse(312));