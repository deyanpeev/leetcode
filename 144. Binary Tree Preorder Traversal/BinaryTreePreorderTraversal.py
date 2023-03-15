from typing import List
from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:    
    def preorderTraversal(self, c: Optional[TreeNode]) -> List[int]:
        result = []
        if c is not None:
          self._preorderRecursive(c, result)
        return result
    
    def _preorderRecursive(self, node: Optional[TreeNode], result: List[int]):
        result.append(node.val)
        if node.left is not None:
            self._preorderRecursive(node.left, result)
        if node.right is not None:
            self._preorderRecursive(node.right, result)

root = TreeNode(1, None, TreeNode(2, TreeNode(3)))
solution = Solution()
print(solution.preorderTraversal(root))