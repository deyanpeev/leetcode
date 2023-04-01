type BinarySearchOptions = {
  start: number,
  end: number
}

function search(nums: number[], target: number): number {
  return searchBinary(nums, target, {start: 0, end: nums.length - 1});
};

function searchBinary(nums: number[], target: number, binarySearchOptions: BinarySearchOptions): number {
  const {start, end} = binarySearchOptions;
  
  const first = nums[start];
  const midIndex = Math.floor((start + end)/2);
  const mid = nums[midIndex];
  const last = nums[end];

  if(first === last && first !== target) {
    return -1;
  }
  if(target === mid) {
    return midIndex;
  }

  if(target < mid && first <= target ) {
    return searchBinary(nums, target, {start, end: midIndex});
  } else if(target === mid) {
    return midIndex;
  } else {
    const threeQuatersIndex = start  + Math.floor((end - start) * 3 / 4);
    const threeQuaters = nums[threeQuatersIndex];
    if (target < threeQuaters) {
      return searchBinary(nums, target, {start: midIndex, end: threeQuatersIndex});
    } else {
      return searchBinary(nums, target, {start: threeQuatersIndex, end});
    }
  }
}

console.log(search([1,3], 0))