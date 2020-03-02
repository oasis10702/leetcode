/*
 * @lc app=leetcode id=416 lang=javascript
 *
 * [416] Partition Equal Subset Sum
 *
 * https://leetcode.com/problems/partition-equal-subset-sum/description/
 *
 * algorithms
 * Medium (41.93%)
 * Likes:    1937
 * Dislikes: 56
 * Total Accepted:    138.1K
 * Total Submissions: 326.4K
 * Testcase Example:  '[1,5,11,5]'
 *
 * Given a non-empty array containing only positive integers, find if the array
 * can be partitioned into two subsets such that the sum of elements in both
 * subsets is equal.
 *
 * Note:
 *
 *
 * Each of the array element will not exceed 100.
 * The array size will not exceed 200.
 *
 *
 *
 *
 * Example 1:
 *
 *
 * Input: [1, 5, 11, 5]
 *
 * Output: true
 *
 * Explanation: The array can be partitioned as [1, 5, 5] and [11].
 *
 *
 *
 *
 * Example 2:
 *
 *
 * Input: [1, 2, 3, 5]
 *
 * Output: false
 *
 * Explanation: The array cannot be partitioned into equal sum subsets.
 *
 *
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  const sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 2 !== 0) return false;
  const target = sum / 2;
  const dp = new Array(nums.length)
    .fill()
    .map(() => new Array(target + 1).fill(false));
  dp[0][nums[0]] = true;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j <= target; j++) {
      dp[i][j] = dp[i - 1][j];

      if (nums[i] === j) {
        dp[i][j] = true;
      }

      if (nums[i] < j) {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]];
      }
    }

    if (dp[i][target]) return true;
  }

  return dp[nums.length - 1][target];
};
// @lc code=end
