from typing import List

class Solution:
  def permute(self, nums: List[int]) -> List[List[int]]:
    return self.__permuteRecursive(nums, 1, [[x] for x in nums])
  
  def __permuteRecursive(self, nums: List[int], current_index: int, current_result: List[List[int]]) -> List[List[int]]:
    
    if current_index >= len(nums):
      return current_result

    new_result = []
    for num in nums:
      for arr in current_result:
        if num not in arr:
          new_result.append(arr + [num])

    return self.__permuteRecursive(nums, current_index+1, new_result)
  
s = Solution()
print(s.permute([1,2,3]))