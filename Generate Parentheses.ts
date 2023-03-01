function generateParenthesis(n: number): string[] {
  const result: string[] = [];
  generateParenthesisRecussively(n, 0, 0, '', result);
  return result;
};

function generateParenthesisRecussively(max: number, open: number, close: number, current: string, result: string[]) {
  if(current.length == max * 2) {
    result.push(current);
    return;
  }

  if(open < max) {
    generateParenthesisRecussively(max, open+1, close, current+'(', result);
  }
  if(close < open) {
    generateParenthesisRecussively(max, open, close+1, current+')', result);
  }
}

console.log(generateParenthesis(2));