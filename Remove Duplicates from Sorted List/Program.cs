class ListNode
{
    public int val;
    public ListNode next;
    public ListNode(int val = 0, ListNode next = null)
    {
        this.val = val;
        this.next = next;
    }
}

class Solution
{
    public ListNode DeleteDuplicates(ListNode head)
    {
        if(head == null)
        {
            return head;
        } 
        ListNode prev = head;
        ListNode current = prev.next;
        while (current != null)
        {
            if (current.val == prev.val)
            {
                prev.next = current.next;
            }
            else
            {
                prev = current;
            }
            current = current.next;
        }
        return head;
    }
}

public class Program
{
    public static void Main(String[] args)
    {
        var solution = new Solution();
        var head = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(2, new ListNode(2))))));
        var sorted = solution.DeleteDuplicates(head);
        TraverseSorted(sorted);
    }

    private static void TraverseSorted(ListNode head)
    {
        while(head != null)
        {
            Console.WriteLine(head.val);
            head = head.next;
        }
    }
}