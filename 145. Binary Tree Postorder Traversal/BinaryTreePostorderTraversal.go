package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func main() {

}

func postorderTraversal(root *TreeNode) []int {
	result := []int{}
	result = postOrderRecursive(root, result)
	return result
}

func postOrderRecursive(node *TreeNode, arr []int) []int {
	if node == nil {
		return arr
	}

	result := postOrderRecursive(node.Left, arr)
	result = postOrderRecursive(node.Right, result)
	result = append(result, node.Val)
	return result
}
