class Solution
{
    public void Merge(int[] nums1, int m, int[] nums2, int n)
    {
        int[] nums1Cloned = nums1.Clone() as int[];
        int index1 = 0;
        int index2 = 0;
        for (int i = 0; i < nums1.Length; i++)
        {
            if(index1 >= m)
            {
                nums1[i] = nums2[index2++];
                continue;
            }
            if(index2 >= n)
            {
                nums1[i] = nums1Cloned[index1++];
                continue;
            }
            if (nums1Cloned[index1] < nums2[index2])
            {
                nums1[i] = nums1Cloned[index1++];
            }
            else
            {
                nums1[i] = nums2[index2++];
            }
        }
    }
}

class Program
{
    public static void Main(String[] args)
    {
        
    }
}