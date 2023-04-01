from typing import List

class Solution:
  def nextPermutation(self, nums: List[int]) -> None:
    if(not self.__isListSorted(nums)):
      nums.reverse()
      return

    indexToChange = 0
    for i in range(len(nums)-1, 1, -1):
        print('1')
        if(nums[i-1] != nums[i]):
          indexToChange = i
          break
    
    print(len(nums)-1)
    # swap indexes
    nums[indexToChange], nums[indexToChange-1] = nums[indexToChange-1], nums[indexToChange]


  def __isListSorted(self, nums: List[int]) -> bool:
    for i in range(1, len(nums)):
       if(nums[i-1] > nums[i]):
          return False
    return True
  

s = Solution()
l = [1,2,3]
s.nextPermutation(l)
print(l)