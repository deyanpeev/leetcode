class Solution:
  def divide(self, dividend: int, divisor: int) -> int:
    result = 0
    MAX_VALUE = 1 << 31 - 1
    isPositive = (dividend > 0) == (divisor > 0)
    dividend, divisor = abs(dividend), abs(divisor)
    while dividend >= divisor:
      powerToAdd = 0
      while dividend > (divisor<<(1+powerToAdd)):
        powerToAdd += 1
      result+=1<<powerToAdd
      dividend-=divisor<<powerToAdd

    return result if isPositive else -result

s = Solution()
print(s.divide(10, 5))