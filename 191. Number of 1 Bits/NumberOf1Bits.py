class Solution:
  def hammingWeight(self, n: int) -> int:
    binaryString = "{0:b}".format(n)
    numberOfOnes = 0
    for letter in binaryString:
      if letter == '1':
        numberOfOnes+=1
    return numberOfOnes

s = Solution()
print(s.hammingWeight(3))