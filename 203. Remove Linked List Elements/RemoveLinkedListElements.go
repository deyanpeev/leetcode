package main

import "fmt"

func main() {
	head := ListNode{1, &ListNode{2, &ListNode{5, &ListNode{1, nil}}}}

	newHead := removeElements(&head, 5)

	for newHead != nil {
		fmt.Println(newHead.Val)
		newHead = newHead.Next
	}
}

type ListNode struct {
	Val  int
	Next *ListNode
}

func removeElements(head *ListNode, val int) *ListNode {
	for head != nil && head.Val == val {
		head = head.Next
	}

	currentNode := head
	for currentNode != nil && currentNode.Next != nil {
		next := currentNode.Next
		for next != nil && next.Val == val {
			next = next.Next
		}
		currentNode.Next = next
		currentNode = next
	}

	return head
}
