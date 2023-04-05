package main

import "fmt"

func main() {
	head := ListNode{1, &ListNode{2, &ListNode{5, &ListNode{1, nil}}}}

	newHead := reverseList(&head)

	c := 0
	for newHead != nil && c < 10 {
		fmt.Println(newHead.Val)
		newHead = newHead.Next
		c++
	}
}

type ListNode struct {
	Val  int
	Next *ListNode
}

func reverseList(head *ListNode) *ListNode {
	if head == nil {
		return head
	}

	tail := head.Next
	head.Next = nil
	for tail != nil {
		// place node in the begining
		node := tail
		tail = tail.Next
		node.Next = head
		head = node
	}
	return head
}
