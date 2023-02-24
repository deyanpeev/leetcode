package main

import (
	"fmt"
	"math"
)

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func maxDepth(root *TreeNode) int {
	if root == nil {
		return 0
	}

	return getMaxDepthRecursive(root, 1)
}

func getMaxDepthRecursive(node *TreeNode, current int) int {
	if node.Left == nil && node.Right == nil {
		return current
	}
	if node.Left == nil {
		return getMaxDepthRecursive(node.Right, current+1)
	}
	if node.Right == nil {
		return getMaxDepthRecursive(node.Left, current+1)
	}
	return int(math.Max(getMaxDepthRecursive(node.Left, current+1), getMaxDepthRecursive(node.Right, current+1)))
}

func main() {
	fmt.Println(maxDepth(nil))
}
