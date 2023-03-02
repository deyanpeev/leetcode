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

function minDepth(root: TreeNode | null): number {
	if(!root) {
		return 0;
	}
	return findTreeMinDepth(root, 1) + 1;
};

function findTreeMinDepth(node: TreeNode | null, currentNumber: number, isSlit: boolean = false): number {
  if(!node) {
		if(!isSlit) {
			return Number.MAX_SAFE_INTEGER;
		}
    return currentNumber;
  }
	if(!node.left && !node.right) {
		return currentNumber;
	}

  const left = findTreeMinDepth(node.left, currentNumber+1, (!!node.left && !!node.right));
  const right = findTreeMinDepth(node.right, currentNumber+1, (!!node.left && !!node.right));

  return Math.min(left, right);
}

const root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
// const root = new TreeNode(3, null, new TreeNode(20, null, new TreeNode(7, null, new TreeNode(4))));
console.log(minDepth(root));