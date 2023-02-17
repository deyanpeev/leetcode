function threeSumClosest(nums: number[], target: number): number {
  let closest = Number.MAX_VALUE

  for(let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while(left < right) {
      let current = nums[i] + nums[left] + nums[right];
      if(current === target) {
        return target;
      }
      if((target < 0 && target + current < target + closest)
          || (target >= 0 && Math.abs(current - target) < Math.abs(closest - target))) {
        closest = current;
      }

      if(current < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closest;
};

console.log(threeSumClosest([-1,2,1,-4], 1));