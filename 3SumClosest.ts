function threeSumClosest(nums: number[], target: number): number {
  let closest = Number.MAX_VALUE
  nums = nums.sort((a,b) => a-b)

  for(let i = 0; i < nums.length-2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while(left < right) {
      let current = nums[i] + nums[left] + nums[right];
      if(current === target) {
        return target;
      }
      if(isSmallerDistance(current, closest, target)) {
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

function isSmallerDistance(current: number, previous: number, target: number): boolean {
  // const diffCurrent = current * target < 0 ? Math.abs(current * -1 + target) : Math.abs(current - target);
  // const diffPrevious = previous * target < 0 ? Math.abs(previous * -1 + target) : Math.abs(previous - target);
  // return diffCurrent < diffPrevious;
  return (Math.abs(current-target)<Math.abs(previous-target));
}

console.log(threeSumClosest([0,0,0], 1));
console.log(isSmallerDistance(5,515235235235,1));