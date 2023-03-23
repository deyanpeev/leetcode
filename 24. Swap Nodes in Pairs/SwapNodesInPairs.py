from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        resultHead: Optional[ListNode] = None
        resultTail: Optional[ListNode] = None
        traverseNode = head
        while(traverseNode is not None):
            next = traverseNode.next
            elementsToAdd = ListNode(traverseNode.val) if next is None else ListNode(next.val, ListNode(traverseNode.val))
            if resultHead is None:
                resultHead = elementsToAdd
                resultTail = resultHead if resultHead.next is None else resultHead.next
            else:
                resultTail.next = elementsToAdd
                resultTail = resultTail.next if resultTail.next is None else resultTail.next.next
            traverseNode = traverseNode.next if traverseNode.next is None else traverseNode.next.next

        return resultHead
    
head = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))
solution = Solution()
traversedHead = solution.swapPairs(head)
while traversedHead is not None:
    print(traversedHead.val)
    traversedHead = traversedHead.next