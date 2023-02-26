using System;

public class TreeNode
{
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(int val = 0, TreeNode left = null, TreeNode right = null)
    {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

public class Program
{
    public int MaxDepth(TreeNode root)
    {
        if(root == null)
        {
            return 0;
        }

        return GetMaxDepthRecursively(root, 1);
    }

    public int GetMaxDepthRecursively(TreeNode node, int current = 0)
    {
        if (node.left == null && node.right == null)
        {
            return current;

        }
        if (node.left == null)
        {
            return GetMaxDepthRecursively(node.right, current + 1);

        }
        if (node.right == null)
        {
            return GetMaxDepthRecursively(node.left, current + 1);

        }
        return (Math.Max(GetMaxDepthRecursively(node.left, current + 1),
            GetMaxDepthRecursively(node.right, current + 1)));
    }
}

public class Solution
{


    public static void Main(String[] args)
    {
        var node = new TreeNode
        {
            val = 3,
            left = new TreeNode { val = 9 },
            right = new TreeNode
            {
                val = 20,
                left = new TreeNode { val = 15 },
                right = new TreeNode
                {
                    val = 7,
                    right = new TreeNode { val = 19}
                }
            }
        };

        Program p = new Program();
        Console.WriteLine(p.MaxDepth(node));
    }
}