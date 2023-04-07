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

function invertTree(root: TreeNode | null): TreeNode | null {
  //BFS
  const stack: (TreeNode|null)[] = [];
  stack.push(root);
  while(stack.length) {
    const node = stack.shift();
    if(!node) continue;
    [node.left, node.right] = [node.right, node.left];
    stack.push(node.left);
    stack.push(node.right);
  }
  return root;
};

const root = new TreeNode(4,
  new TreeNode(2, 
    new TreeNode(1), new TreeNode(2)), 
  new TreeNode(7, 
    new TreeNode(6), new TreeNode(9)));