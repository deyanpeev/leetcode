package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

func hasCycle(head *ListNode) bool {
	tortoise := head
	hare := head

	for hare != nil && hare.Next != nil {
		tortoise = tortoise.Next
		hare = hare.Next.Next
		if tortoise == hare {
			return true
		}
	}

	return false
}

func main() {
	second := ListNode{Val: 10}
	first := ListNode{Val: -1, Next: &second}
	head := ListNode{Val: 4, Next: &first}
	second.Next = &head

	fmt.Println(hasCycle(&head))
}
