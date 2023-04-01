from typing import List
import math

class Solution:
  def searchRange(self, nums: List[int], target: int) -> List[int]:
    start, end = 0, len(nums) - 1
    while start < end or (nums[start] != target and nums[end] != target):
      mid = math.floor((start + end) / 2)
      if nums[mid] < target:
        start = mid + 1
      elif nums[mid] > target:
        end = mid - 1
      else: 
        quater = start + math.floor(end / 4)
        theeQuaters = start + math.floor(end * 3 / 4)
        start = quater
        end = theeQuaters
    
    if start > end:
      return [-1, -1]
    return [start, end]

s = Solution()
print(s.searchRange([5,7,7,8,8,10], 8))