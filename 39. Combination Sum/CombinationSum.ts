type RecursiveSumInput = {
  numbers: number[],
  currentList: number[],
  //always insert next number with higher index
  //that will guarantee unique combinations
  index: number, 
  result: number[][],
  target: number
}

function combinationSum(candidates: number[], target: number): number[][] {
  const recursiveSumInput: RecursiveSumInput = {
    numbers: candidates,
    currentList: [],
    index: 0,
    result: [],
    target
  };

  combinationSumRecursive(recursiveSumInput)

  return recursiveSumInput.result;
};

function combinationSumRecursive(input: RecursiveSumInput) {
  const sum = input.currentList
    .reduce((partialSum, a) => partialSum + a, 0);
  if(sum > input.target) {
    return;
  } else if(sum === input.target) {
    input.result.push(input.currentList);
  } else {
    for (let i = input.index; i < input.numbers.length; i++) { 
      const newInput: RecursiveSumInput = {
        ...input,
        currentList: [...input.currentList, input.numbers[i]],
        index: i
      }
      combinationSumRecursive(newInput);
    }
  }
}

console.log(combinationSum([2,3,5], 8));