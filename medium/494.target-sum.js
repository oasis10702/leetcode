/*
 * @lc app=leetcode id=494 lang=javascript
 *
 * [494] Target Sum
 *
 * https://leetcode.com/problems/target-sum/description/
 *
 * algorithms
 * Medium (46.06%)
 * Likes:    1907
 * Dislikes: 86
 * Total Accepted:    130.3K
 * Total Submissions: 281.9K
 * Testcase Example:  '[1,1,1,1,1]\n3'
 *
 *
 * You are given a list of non-negative integers, a1, a2, ..., an, and a
 * target, S. Now you have 2 symbols + and -. For each integer, you should
 * choose one from + and - as its new symbol.
 * ⁠
 *
 * Find out how many ways to assign symbols to make sum of integers equal to
 * target S.
 *
 *
 * Example 1:
 *
 * Input: nums is [1, 1, 1, 1, 1], S is 3.
 * Output: 5
 * Explanation:
 *
 * -1+1+1+1+1 = 3
 * +1-1+1+1+1 = 3
 * +1+1-1+1+1 = 3
 * +1+1+1-1+1 = 3
 * +1+1+1+1-1 = 3
 *
 * There are 5 ways to assign symbols to make the sum of nums be target 3.
 *
 *
 *
 * Note:
 *
 * The length of the given array is positive and will not exceed 20.
 * The sum of elements in the given array will not exceed 1000.
 * Your output answer is guaranteed to be fitted in a 32-bit integer.
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
  let count = 0;
  dfs(0, 0);
  function dfs(idx, cur) {
    if (idx === nums.length) {
      if (cur === S) count++;
      return;
    }

    dfs(idx + 1, cur + nums[idx]);
    dfs(idx + 1, cur - nums[idx]);
  }

  return count;
};
// @lc code=end
