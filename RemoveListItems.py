class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
      i = 0
      array_size = len(nums)
      while(i < array_size):
        if nums[i] == val:
          nums.pop(i)
          array_size-=1
        else:
          i+=1
      return array_size