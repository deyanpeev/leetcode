package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

func swapPairs(head *ListNode) *ListNode {
	var resultHead *ListNode
	var resultTail *ListNode
	traversingNode := head
	for traversingNode != nil {
		//create swap pair
		swappedNode := ListNode{Val: traversingNode.Val}
		if traversingNode.Next != nil {
			swappedNode = ListNode{
				Val:  traversingNode.Next.Val,
				Next: &ListNode{Val: traversingNode.Val},
			}
		}

		//attach swapped pair
		if resultHead == nil {
			resultHead = &swappedNode
			resultTail = resultHead
		} else {
			resultTail.Next = &swappedNode
			resultTail = resultHead.Next
		}
		if resultTail.Next != nil {
			resultTail = resultTail.Next
		}

		//go to next element
		traversingNode = traversingNode.Next
		if traversingNode != nil {
			traversingNode = traversingNode.Next
		}
	}

	return resultHead
}

func main() {
	head := &ListNode{
		Val: 1,
		Next: &ListNode{
			Val: 2,
			Next: &ListNode{
				Val: 3,
				Next: &ListNode{
					Val: 4,
					Next: &ListNode{
						Val: 5,
					},
				},
			},
		},
	}

	reversed := swapPairs(head)
	for reversed != nil {
		fmt.Println(reversed.Val)
		reversed = reversed.Next
	}
}
