function reverseBits(n: number): number {
	const asStringBits = n.toString(2).padStart(32, '0');
  const reversedStringBits = asStringBits.split('').reverse().join('');
  return parseInt(reversedStringBits, 2)
};

console.log(reverseBits(511))