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


function sortedArrayToBST(nums: number[]): TreeNode | null {  
  const root = new TreeNode();
  addRecursively(root, nums);
  return root;  
};

function addRecursively(node: TreeNode, array: number[]): void {
  const mid = Math.floor(array.length / 2);
  const item = array[mid];
  const arr1 = array.slice(0, mid);
  const arr2 = array.slice(mid + 1);

  node.val = item;
  console.log(`item: ${item}`);
  if(arr1.length) {
    node.left = new TreeNode();
    addRecursively(node.left, arr1);
  }
  if(arr2.length) {
    node.right = new TreeNode();
    addRecursively(node.right, arr2);
  }
}

sortedArrayToBST([-10,-3,0,5,9]);