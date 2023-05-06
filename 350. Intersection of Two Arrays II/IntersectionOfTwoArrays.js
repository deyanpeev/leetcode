/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const result = [];

    for (let n of nums1) {
        const index = nums2.indexOf(n);
        if (index > -1) {
            result.push(n);
            nums2.splice(index, 1);
        }
    }

    return result;
};