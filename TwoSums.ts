const nums = [2,7,11,15]
const target = 9;

const result = optimized(nums, target);
console.log(result);

function twoSum(nums: number[], target: number): number[] {
  for(let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      if(nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }

  return [];
};

function optimized(nums: number[], target: number): number[] {
  for(let i = 0; i < nums.length; i++) {
    let subtraction = target - nums[i];
    let subIndex = nums.indexOf(subtraction, i+1);
    if(subIndex > 0) {
      return [i, subIndex];
    }
  }

  return [];
}