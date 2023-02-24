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

    public static void Main(String[] args)
    {

    }


}