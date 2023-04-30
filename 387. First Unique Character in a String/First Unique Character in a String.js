/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const result = {};
  for (let [index, l] of s.split('').entries()) {
    if (result[l]) {
      result[l].isUnique = false;
    } else {
      result[l] = { 
        isUnique: true,
        index: index
      }
    }
  }

  return Object.values(result)
    .filter(e => e.isUnique)
    .sort(e => e.index)[0]?.index ?? -1;
};

console.log(firstUniqChar("leetcode"));