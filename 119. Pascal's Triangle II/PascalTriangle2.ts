function getRow(numRows: number): number[] {
  const result: number[][] = [];
  for(let i = 0; i <= numRows; i++) {
    let currentArr: number[] = [];
    for(let j = 0; j <= i; j++) {
      currentArr.push(getPreviousTwoSum(result, j));
    }
    result.push(currentArr);
  }

  return result[result.length - 1];
};

function getPreviousTwoSum(triangle: number[][], position: number): number {
  if(position === 0
      || !triangle || !triangle.length || !triangle[0] || !triangle[0].length
      || position >= triangle[triangle.length - 1].length) {
    return 1;
  }

  const topArray = triangle[triangle.length - 1];
  return topArray[position - 1] + topArray[position];
}

const test = getRow(3);
console.log(test);