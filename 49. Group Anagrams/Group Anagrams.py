from typing import List

class Solution:
  def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
    ordered_strs = {}
    for s in strs:
      s_sorted = ''.join(sorted(s))
      ordered_strs.setdefault(s_sorted, []).append(s)
    
    return list(ordered_strs.values())

s = Solution()
print(s.groupAnagrams(["eat","tea","tan","ate","nat","bat"]))