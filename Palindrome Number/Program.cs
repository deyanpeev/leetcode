// See https://aka.ms/new-console-template for more information
Console.WriteLine(IsPalindrome(121));
Console.WriteLine(IsPalindrome(1241));
Console.WriteLine(IsPalindrome(1221));


bool IsPalindrome(int x)
{
    string asStr = x.ToString();
    int start = 0;
    int end = asStr.Length - 1;
    while(start < end)
    {
        if (asStr[start] != asStr[end])
        {
            return false;
        }
        start++;
        end--;
    }

    return true;
}