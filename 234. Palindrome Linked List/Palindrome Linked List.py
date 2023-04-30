from typing import Optional

# Definition for singly-linked list.
class ListNode:
  def __init__(self, val=0, next=None):
    self.val = val
    self.next = next

class Solution:
  def isPalindrome(self, head: Optional[ListNode]) -> bool:
    # find the mid element - slow is the mid element
    slow, fast = head, head
    while fast is not None:
      slow, fast = slow.next, fast.next
      if(fast is not None):
        fast = fast.next
    
    # the collection has 1 element
    if slow is None:
      return True

    #reverse second half
    mid, current, next = slow, slow, slow.next
    while next is not None:
      next.next, current, next = current, next, next.next
    mid.next = None

    start, end = head, current
    while end is not None:
      if start.val != end.val:
        return False
      start, end = start.next, end.next
    
    return True

if __name__ == '__main__':
  head = ListNode(1, ListNode(2, ListNode(3, ListNode(3, ListNode(2, ListNode(1))))))
  s = Solution()
  print(s.isPalindrome(head))