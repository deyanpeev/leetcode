function letterCombinations(digits: string): string[] {
  if(!digits || !digits.length) {
    return [];
  }  
  let result: string[] = getDigitsByLetter(digits[0]);
  for(let i = 1; i < digits.length; i++) {
    result = getNextLetterCombCombinations(result, getDigitsByLetter(digits[i]));
  }

  return result;
};

function getNextLetterCombCombinations(currentArray: string[], letters: string[]): string[] {
  const resultArray: string[] = [];

  let element: string | undefined = currentArray.shift();
  while(element) {
    for(let letter of letters) {
      resultArray.push(element+letter);
    }
    element = currentArray.shift();
  }

  return resultArray;
}

function getDigitsByLetter(letter: string): string[] {
  switch(letter) {
    case '2':
      return ['a', 'b', 'c'];
    case '3':
      return ['d', 'e', 'f'];
    case '4':
      return ['g', 'h', 'i'];
    case '5':
      return ['j', 'k', 'l'];
    case '6':
      return ['m', 'n', 'o'];
    case '7':
      return ['p', 'q', 'r', 's'];
    case '8':
      return ['t', 'u', 'v'];
    case '9':
      return ['w', 'x', 'y', 'z'];
    default:
      return [];
  }
}

console.log(letterCombinations('222'));