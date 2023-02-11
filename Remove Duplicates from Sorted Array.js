var removeDuplicates = function(nums) {
  nextIndex = 1;
  for(let i = 0; i < nums.length;) {
      let j = i + 1
      while(j < nums.length && nums[i] === nums[j]) {
          j++;
      }

      if(nums[j] !== undefined) {
          nums[nextIndex++] = nums[j];
      }
      i = j;
  }

  return nextIndex;
};

let arr = [1,2,3]
console.log(removeDuplicates(arr));
console.log(arr)