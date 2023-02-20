function fourSum(nums: number[], target: number): number[][] {
  const result: number[][] = [];

  nums = nums.sort((a, b) => a - b);
  for(let i = 0; i < nums.length - 3; i++) {
    for(let j = nums.length - 1; j > 2; j--) {
      let left = i + 1;
      let right = j - 1;
      while(left < right) {
        let quadruple = [nums[i], nums[left], nums[right], nums[j]];
        let sum = quadruple.reduce((res, curr) => res + curr, 0);
        if(sum < target) {
          left++;
        } else if (sum > target) {
          right--;
        } else {
          if(!quadrupleExists(quadruple, result)) {
            result.push(quadruple);
          }        
          left++;
          right--;
        }
      }
    }
  }

  return result;
};

function quadrupleExists(quadruple: number[], quadruples: number[][]): boolean {
  for(var t of quadruples) {
    if(t.toString() === quadruple.toString()) {
      return true;
    }
  }
  return false;
}

console.log(fourSum([1,0,-1,0,-2,2], 0))

