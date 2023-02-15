function maxArea(height: number[]): number {
  let result = 0;
  for(let i = 0; i < height.length; i++) {
    for(let j = i + 1; j < height.length; j++) {
      let minNumber = Math.min(height[i], height[j]);
      let fromThisIteration = minNumber * (j - i);
      result = fromThisIteration > result ? fromThisIteration : result;
    }
  }

  return result;
};

function optimized(height: number[]): number {
  let result = 0;
  let left = 0;
  let right = height.length - 1;

  while(left < right) {
    let fromThisIteration = Math.min(height[left], height[right]) * (right - left)
    result = fromThisIteration > result ? fromThisIteration : result;

    if(height[left] < height[right]) {
      left++
    } else {
      right--;
    }
  }

  return result;
}

console.log(optimized([1,8,6,2,5,4,8,3,7]));