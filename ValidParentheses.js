const sampleInput = "([]"

var isValid = function(s) {
    let stack = [];
    for(let element of s) {
      switch(element) {
        case '(':
        case '[':
        case '{':
          stack.push(element);
          break;
        case '}':
          if(!stack.length || stack.pop() !== '{')
            return false;
          break;
        case ']':
          if(!stack.length || stack.pop() !== '[')
            return false;
          break;
        case ')':
          if(!stack.length || stack.pop() !== '(')
            return false;
          break;
      }
    }
    console.log(stack.join(' '))
    return !stack.length;
};

console.log(isValid(sampleInput))