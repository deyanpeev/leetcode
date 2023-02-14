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

class Solution
{
    public IList<int> InorderTraversal(TreeNode root)
    {
        IList<int> result = new List<int>();
        TraverseInorder(root, result);

        return result;
    }

    private void TraverseInorder(TreeNode node, IList<int> result)
    {
        if(node == null)
        {
            return;
        }

        TraverseInorder(node.left, result);
        result.Add(node.val);
        TraverseInorder(node.right, result);
    }

    public class Program
    {
        public static void Main(String[] args)
        {
            var root = new TreeNode
            {
                val = 1,
                right = new TreeNode
                {
                    val = 2,
                    left = new TreeNode
                    {
                        val = 3
                    },
                    right = new TreeNode
                    {
                        val = -1
                    }
                },
                left = new TreeNode
                {
                    val = 12
                }
            };

            var solution = new Solution();
            IList<int> list = solution.InorderTraversal(root);

            foreach (var item in list)
            {
                Console.WriteLine(item);
            }
        }
    }