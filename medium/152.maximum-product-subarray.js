/*
 * @lc app=leetcode id=152 lang=javascript
 *
 * [152] Maximum Product Subarray
 *
 * https://leetcode.com/problems/maximum-product-subarray/description/
 *
 * algorithms
 * Medium (30.48%)
 * Likes:    3041
 * Dislikes: 131
 * Total Accepted:    276.1K
 * Total Submissions: 901.2K
 * Testcase Example:  '[2,3,-2,4]'
 *
 * Given an integer array nums, find the contiguous subarray within an array
 * (containing at least one number) which has the largest product.
 *
 * Example 1:
 *
 *
 * Input: [2,3,-2,4]
 * Output: 6
 * Explanation: [2,3] has the largest product 6.
 *
 *
 * Example 2:
 *
 *
 * Input: [-2,0,-1]
 * Output: 0
 * Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let ans = -Number.MAX_VALUE;
  let min = 1;
  let max = 1;

  for (let num of nums) {
    [min, max] = [
      Math.min(num, min * num, max * num),
      Math.max(num, min * num, max * num)
    ];
    ans = Math.max(ans, max);
  }

  return ans;
};
// @lc code=end
