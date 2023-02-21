class TreeNode {
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution
{
    public bool IsSymmetric(TreeNode root)
    {
        return AreElementsEqual(root.left, root.right);
    }

    private bool AreElementsEqual(TreeNode left, TreeNode right)
    {
        if(left == null && right == null)
        {
            return true;
        }

        if(left == null || right == null)
        {
            return false;
        }

        if(left.val != right.val)
        {
            return false;
        }

        return AreElementsEqual(left.left, right.right)
            && AreElementsEqual(left.right, right.left);
    }
}

public class Program
{
    public static void Main()
    {
        var solution = new Solution();

        var tree = new TreeNode
        {
            val = 1,
            left = new TreeNode
            {
                val = 2,
                left = new TreeNode
                {
                    val = 3
                },
                right = new TreeNode
                {
                    val = 4
                }
            },
            right = new TreeNode
            {
                val = 2,
                left = new TreeNode
                {
                    val = 4
                },
                right = new TreeNode
                {
                    val = 3
                }
            }
        };

        Console.WriteLine(solution.IsSymmetric(tree));
    }
}