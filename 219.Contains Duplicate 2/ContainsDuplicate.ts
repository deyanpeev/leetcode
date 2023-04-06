function containsNearbyDuplicate(nums: number[], k: number): boolean {
  for(let i = 0; i < nums.length - k; i++) {
    for(let j = i + 1; j <= i + k; j++) {
      if(nums[i] === nums[j]) {
        return true
      }
    }
  }
  return false;
}

console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2))