from typing import LiteralString

class Solution:
  def isHappy(self, n: int) -> bool:
    results = []
    strN = str(n)
    while True:
      if Solution.isHappySum(strN):
        return True
      if strN in results:
        return False
      
      results.append(strN)
      strN = Solution.sumDigits(strN)

  @staticmethod
  def sumDigits(digits: str) -> str:
    resultSum = 0
    for digit in digits:
      resultSum += int(digit) ** 2
    return str(resultSum)

  @staticmethod
  def isHappySum(digits: str) -> bool:
    sum = 0
    for digit in digits:
      sum += int(digit)
      if sum > 1:
        return False
    return True
  

s = Solution()
print(s.isHappy(2))