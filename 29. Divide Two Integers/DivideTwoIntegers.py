class Solution:
  def divide(self, dividend: int, divisor: int) -> int:
    MAX_VALUE = (1 << 31) - 1
    MIN_VALUE = (1<<31) * -1

    result = 0
    isPositive = (dividend > 0) == (divisor > 0)
    dividend, divisor = abs(dividend), abs(divisor)
    while dividend >= divisor:
      powerToAdd = 0
      while dividend >= (divisor<<(1+powerToAdd)):
        powerToAdd += 1
      result+=1<<powerToAdd
      dividend-=divisor<<powerToAdd

    result = result if isPositive else -result
    if result > MAX_VALUE:
      return MAX_VALUE
    if result < MIN_VALUE:
      return MIN_VALUE

    return result

s = Solution()
print(s.divide(-2147483648, 1))