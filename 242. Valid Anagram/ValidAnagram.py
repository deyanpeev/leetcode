class Solution:
  def isAnagram(self, s: str, t: str) -> bool:
    chars = list(t)
    for letter in s:
      try:
        chars.remove(letter)
      except:
        return False

    return len(chars) == 0