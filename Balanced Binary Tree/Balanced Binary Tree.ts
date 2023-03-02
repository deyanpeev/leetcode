/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
}

function isBalanced(root: TreeNode | null): boolean {
  if(!root) {
    return true;
  }

  return areTwoNodesBalanced(root.left, root.right);
};

function areTwoNodesBalanced(left: TreeNode | null, right: TreeNode | null): boolean {
  const depthLeft = findTreeDepth(left, 0);
  const depthRight = findTreeDepth(right, 0);

  if(Math.abs(depthLeft - depthRight) > 1) {
    return false;
  }

  if(!left && !right) {
    return true;
  }

  return areTwoNodesBalanced(left && left.left, left && left?.right) && areTwoNodesBalanced(right && right?.left, right && right?.right)
}
 
function findTreeDepth(node: TreeNode | null, currentNumber: number): number {
  if(!node) {
    return currentNumber;
  }

  const left = findTreeDepth(node.left, currentNumber+1);
  const right = findTreeDepth(node.right, currentNumber+1);

  return Math.max(left, right);
}

const root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
console.log(isBalanced(root));