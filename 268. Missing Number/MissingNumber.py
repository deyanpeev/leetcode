from typing import List

class Solution:
  def missingNumber(self, nums: List[int]) -> int:
    nums_sum = sum(nums)
    n = len(nums)
    ideal_sum = n * (n + 1) / 2

    return int(ideal_sum - nums_sum)
  
s = Solution()
print(s.missingNumber([3,0,1]))