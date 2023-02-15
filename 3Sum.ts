function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];

  nums = nums.sort((a,b)=>a-b);

  for(let i = 0; i < nums.length - 2; i++) {
    if(nums[i] > 0) {
      break;
    }
    let j = i + 1;
    let k = nums.length - 1;
    while(j < k) {
      let tripple = [nums[i], nums[j], nums[k]];
      let sum = tripple.reduce((res, curr) => res + curr, 0);
      if(sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      } else {
        if(!tripleExists(tripple, result)) {
          result.push(tripple);
        }        
        j++;
        k--;
      }
    }
  }

  return result;
};

function anotherApproach(nums: number[]): number[][] {
  const result: number[][] = [];
  nums = nums.sort((a,b)=>a-b);

  const positive = nums.filter(i => i > 0);
  const zeros = nums.filter(i => i === 0);
  const negative = nums.filter(i => i < 0);

  if(zeros.length >= 3) {
    result.push([0,0,0])
  }

  if(zeros.length >= 1) {
    for(let num of positive) {
      if(negative.includes(num*-1)) {
        let tupple = [num, 0, num*-1];
        if(!tripleExists(tupple, result)) {
          result.push(tupple);
        }
      }
    }
  }
  for(let i = 0; i < positive.length; i++) {
    for(let j = i+1; j < positive.length; j++) {
      console.log('opaa ' + positive[i] + positive[j]);
      if(negative.includes((positive[i] + positive[j]) * -1)) {
        let tupple = [positive[i], positive[j], (positive[i] + positive[j]) * -1];
        if(!tripleExists(tupple, result)) {
          result.push(tupple);
        }
      }
    }
  }
  for(let i = 0; i < negative.length; i++) {
    for(let j = i+1; j < negative.length; j++) {
      if(positive.includes((negative[i] + negative[j]) * -1)) {
        let tupple = [negative[i], negative[j], (negative[i] + negative[j]) * -1];
        if(!tripleExists(tupple, result)) {
          result.push(tupple);
        }
      }
    }
  }

  return result;
}

function tripleExists(triple: number[], triples: number[][]): boolean {
  for(var t of triples) {
    if(t.toString() === triple.toString()) {
      return true;
    }
  }
  return false;
}

console.log(anotherApproach([1,1,-2]));

// console.log([-1,0,1,2,-1111,-4,-2,-3,3,0,4].sort((a, b) => a-b))