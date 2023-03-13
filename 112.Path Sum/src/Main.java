import java.sql.SQLOutput;

public class Main {
    public static void main(String[] args) {
        TreeNode root = new TreeNode(1, new TreeNode(2), new TreeNode(3));

        Main solution = new Main();
        System.out.println(solution.hasPathSum(root, 4));
    }

    public boolean hasPathSum(TreeNode root, int targetSum) {
        if(root == null) {
            return false;
        }

        if(root.val == targetSum && isLeaf(root)) {
            return true;
        }

        return getBinarySumPathRecursively(root, root.val, targetSum);
    }

    private boolean getBinarySumPathRecursively(TreeNode currentNode, int currentSum, int targetSum) {
        var leftNode = currentNode.left;
        var rightNode = currentNode.right;
        if(leftNode != null) {
            int leftSum = currentSum + leftNode.val;
            if(leftSum == targetSum && isLeaf(leftNode)) {
                return true;
            }
            if(getBinarySumPathRecursively(leftNode, leftSum, targetSum))
                return true;
        }
        if(rightNode != null) {
            int rightSum = currentSum + rightNode.val;
            if(rightSum == targetSum && isLeaf(rightNode)) {
                return true;
            }
            if(getBinarySumPathRecursively(rightNode, rightSum, targetSum))
                return true;
        }

        return false;
    }

    private boolean isLeaf(TreeNode node) {
        return node.left == null && node.right == null;
    }
}
