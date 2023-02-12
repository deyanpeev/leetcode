function addBinary(a: string, b: string): string {
  const shorter = a.length < b.length ? a : b;
  const longer = a.length >= b.length ? a : b;

  const shorterAsArray = shorter.split('').reverse().map(i => +i);
  const longerAsArray = longer.split('').reverse().map(i => +i);

  const resultArray: number[] = [];

  let moveNext = 0;
  for(let i = 0; i < longerAsArray.length; i++) {
    let sum = moveNext + longerAsArray[i] + (i < shorterAsArray.length ? shorterAsArray[i] : 0);
    switch(sum){
      case 0:
        resultArray.push(0);
        moveNext = 0;
        break;
      case 1:
        resultArray.push(1);
        moveNext = 0;
        break;
      case 2:
        resultArray.push(0);
        moveNext = 1
        break;
      case 3:
        resultArray.push(1);
        moveNext = 1;
        break;
    }
  }
  if(moveNext) {
    resultArray.push(1)
  }

  return resultArray.reverse().join('');
};

console.log(addBinary('1010', '1011'));