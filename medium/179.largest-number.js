/*
 * @lc app=leetcode id=179 lang=javascript
 *
 * [179] Largest Number
 *
 * https://leetcode.com/problems/largest-number/description/
 *
 * algorithms
 * Medium (27.01%)
 * Likes:    1402
 * Dislikes: 170
 * Total Accepted:    154K
 * Total Submissions: 567.6K
 * Testcase Example:  '[10,2]'
 *
 * Given a list of non negative integers, arrange them such that they form the
 * largest number.
 *
 * Example 1:
 *
 *
 * Input: [10,2]
 * Output: "210"
 *
 * Example 2:
 *
 *
 * Input: [3,30,34,5,9]
 * Output: "9534330"
 *
 *
 * Note: The result may be very large, so you need to return a string instead
 * of an integer.
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  return (
    nums
      .sort((a, b) => `${b}${a}` - `${a}${b}`)
      .join('')
      .replace(/^0*/, '') || '0'
  );
};
// @lc code=end
