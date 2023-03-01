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
  
};

function addRecursively(node: TreeNode, array: number[]): void {
  const mid = Math.floor(array.length / 2);
  const item = array[mid];
  const arr1 = array.splice(0, mid);
  const arr2 = array.splice(mid + 1);

  node.val = item;
  if(arr1.length) {
    node.left = new TreeNode();
    addRecursively(node.left, arr1);
  }
  if(arr2.length) {
    node.right = new TreeNode();
    addRecursively(node.right, arr2);
  }
}