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
    public bool IsSameTree(TreeNode p, TreeNode q)
    {
        Queue<TreeNode> pQueue = new Queue<TreeNode>();
        Queue<TreeNode> qQueue = new Queue<TreeNode>();

        pQueue.Enqueue(p);
        qQueue.Enqueue(q);

        while(pQueue.Count > 0 && qQueue.Count > 0)
        {
            var pNode = pQueue.Dequeue();
            var qNode = qQueue.Dequeue();
            if (pNode == null && qNode == null)
                continue;

            if (pNode == null || qNode == null)
                return false;

            if(pNode.val != qNode.val) 
                return false;

            pQueue.Enqueue(pNode.left);
            pQueue.Enqueue(pNode.right);

            qQueue.Enqueue(qNode.left);
            qQueue.Enqueue(qNode.right);
        }

        if (pQueue.Count > 0 || qQueue.Count > 0)
            return false;

        return true;
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