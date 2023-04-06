function containsNearbyDuplicate(nums: number[], k: number): boolean {
  for(let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j <= Math.min((i + k), nums.length); j++) {
      if(nums[i] === nums[j]) {
        return true
      }
    }
  }
  return false;
}

console.log(containsNearbyDuplicate([99,99], 2))