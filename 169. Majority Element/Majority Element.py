from typing import List

def majorityElement(nums: List[int]) -> int:
    nums_occurance = dict()
    for num in nums:
        if(num not in nums_occurance):
            nums_occurance[num] = 1
        else:
            nums_occurance[num] = nums_occurance.get(num) + 1
    
    highest_num = None
    highest_occurence = 0

    for num in nums_occurance.keys():
        if(nums_occurance[num] > highest_occurence):
            highest_num = num
            highest_occurence = nums_occurance[num]

    return highest_num

print(majorityElement([2,2,1,1,1,2,2]))