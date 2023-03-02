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
  if (!root) {
    return true;
  }
  const leftDepth = getDepth(root.left);
  const rightDepth = getDepth(root.right);

  return Math.abs(leftDepth - rightDepth) <= 1 && isBalanced(root.left) && isBalanced(root.right)
};

function getDepth(node: TreeNode | null): number {
  if(!node) {
    return 0;
  }
  return Math.max(getDepth(node.left), getDepth(node.right)) + 1;
}

const rootEl = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
console.log(isBalanced(rootEl));