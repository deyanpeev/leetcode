using System.Xml;

public class ListNode
{
    public int val;
    public ListNode next;
    public ListNode(int val = 0, ListNode next = null)
    {
        this.val = val;
        this.next = next;
    }
}

public class Solution
{
    public ListNode RemoveNthFromEnd(ListNode head, int n)
    {
        IList<int> list = ConvertToList(head);
        list.RemoveAt(list.Count - n);
        var result = ConvertToListNode(list);
        return result;
    }

    public void PrintNode(ListNode head)
    {
        while (head is not null)
        {
            Console.WriteLine(head.val);
            head = head.next;
        }
    }

    private IList<int> ConvertToList(ListNode head)
    {
        IList<int> resultArray = new List<int>();
        if (head is null)
        {
            return resultArray;
        }

        while (head is not null)
        {
            resultArray.Add(head.val);
            head= head.next;
        }

        return resultArray;
    }

    private ListNode ConvertToListNode(IList<int> list)
    {
        if(list == null || list.Count == 0)
        {
            return null;
        }

        ListNode head = new ListNode();
        ListNode current = head;
        
        for (int i = 0; i < list.Count - 1; i++)
        {
            current.val= list[i];
            current.next = new ListNode();
            current= current.next;
        }
        current.val = list[list.Count - 1];

        return head;
    }
}

public class SolutionOptimized
{
    public ListNode RemoveNthFromEnd(ListNode head, int n)
    {
        ListNode resultHead = head;
        var currentNode = resultHead;
        var nthNode = currentNode;
        int nFromBack = 0, totalListSize = 1;

        while (currentNode.next != null)
        {
            if(nFromBack < n)
            {
                nFromBack++;
            }
            else if (nFromBack == n)
            {
                nthNode = nthNode.next;
            }
            currentNode = currentNode.next;
            totalListSize++;
        }
        if (nthNode == resultHead && (nFromBack == 0 || totalListSize <= n))
        {
            return resultHead = resultHead?.next;
        }
        else
        {
            nthNode.next = nthNode?.next?.next;
        }

        return resultHead;
    }
}


public class Program
{
    public static void Main(String[] args)
    {
        ListNode node = new ListNode
        {
            val = 1,
            next = new ListNode
            {
                val = 2,
                //next = new ListNode
                //{
                //    val = 3,
                //    next = new ListNode
                //    {
                //        val = 4,
                //        next = new ListNode
                //        {
                //            val = 5
                //        }
                //    }
                //}
            }
        };

        var solution = new Solution();
        var optSolution = new SolutionOptimized();

        node = optSolution.RemoveNthFromEnd(node, 1);

        solution.PrintNode(node);
    }
}