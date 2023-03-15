class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let a: ListNode | null = headA;
  let b: ListNode | null = headB;

  while(a !== b) {
    a = a===null ? headB : a.next;
    b = b===null ? headA : b.next;
  }

  return a;
};