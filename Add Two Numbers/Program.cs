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
    public ListNode AddTwoNumbers(ListNode l1, ListNode l2)
    {
        ListNode resultHead = new ListNode();
        ListNode previousNode = null;
        int fromPreviousOperation = 0;
        while(l1 is not null || l2 is not null || fromPreviousOperation != 0)
        {
            int l1Num = 0;
            if (l1 is not null)
            {
                l1Num = l1.val;
                l1 = l1.next;
            }

            int l2Num = 0;
            if (l2 is not null)
            {
                l2Num = l2.val;
                l2 = l2.next;
            }

            int currentSum = l1Num + l2Num + fromPreviousOperation;
            if (currentSum > 9)
            {
                currentSum = currentSum % 10;
                fromPreviousOperation = 1;
            }
            else
            {
                fromPreviousOperation = 0;
            }

            if(previousNode == null)
            {
                previousNode = resultHead;
                previousNode.val= currentSum;
            }
            else
            {
                var currentNode = new ListNode { val = currentSum };
                previousNode.next = currentNode;
                previousNode = currentNode;
            }
        }      

        return resultHead;
    }
}

public class Program
{
    public static void Main(String[] args)
    {
        var l1 = new ListNode
        {
            val = 1,
            next = new ListNode
            {
                val = 3,
                next = new ListNode
                {
                    val = 5
                }
            }
        };
        var l2 = new ListNode
        {
            val = 2,
            next = new ListNode
            {
                val = 4,
                next = new ListNode
                {
                    val = 6
                }
            }
        };

        var solution = new Solution();
        var result = solution.AddTwoNumbers(l1, l2);
        while(result != null)
        {
            Console.WriteLine(result.val);
            result = result.next;
        }
    }
}