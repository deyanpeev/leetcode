from typing import List
import math

class Solution:
  def searchRange(self, nums: List[int], target: int) -> List[int]:
    result = [-1,-1]
    if(len(nums) == 0):
      return result

    start, end = 0, len(nums) - 1
    while start < end:
      mid = math.floor((start + end) / 2)
      if nums[mid] < target:
        start = mid + 1
      else:
        end = mid
      
    if nums[start] == target:
      result[0] = start
    else:
      return result
    
    end = len(nums) - 1
    while start < end:
      mid = math.ceil((start + end) / 2)
      if nums[mid] > target:
        end = mid - 1
      else:
        start = mid
    
    result[1] = end
    return result

s = Solution()
print(s.searchRange([5,7,7,8,8,10], 8))