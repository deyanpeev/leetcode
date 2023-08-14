package main

import (
	"fmt"
)

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func levelOrder(root *TreeNode) [][]int {
	if root == nil {
		return [][]int{}
	}
	var result [][]int
	queue := []*TreeNode{root}
	for len(queue) > 0 {
		var currentLevel []int
		var newQueue []*TreeNode
		for _, el := range queue {
			currentLevel = append(currentLevel, el.Val)
			if el.Left != nil {
				newQueue = append(newQueue, el.Left)
			}
			if el.Right != nil {
				newQueue = append(newQueue, el.Right)
			}
		}
		result = append(result, currentLevel)
		queue = newQueue
	}
	return result
}

func main() {
	root := &TreeNode{
		Val: 1,
		Left: &TreeNode{
			Val: 2,
			Right: &TreeNode{
				Val: 6,
			},
		},
		Right: &TreeNode{
			Val: 3,
			Left: &TreeNode{
				Val:   4,
				Left:  &TreeNode{Val: 5},
				Right: nil,
			},
			Right: nil,
		},
	}
	fmt.Println(levelOrder(root))
}
