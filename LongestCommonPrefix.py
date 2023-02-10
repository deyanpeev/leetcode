def longestCommonPrefix(strs) -> str:
  indexUntil = 0
  for i in range(0, len(min(strs, key=len))):
    first_el_letter = strs[0][i]
    for str in strs:
      if str[i] is not first_el_letter:
        return str[0:indexUntil]
    indexUntil+=1
  return strs[0][0:indexUntil]

print(longestCommonPrefix(["kupan", "kupa"]))