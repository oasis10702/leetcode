/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 *
 * https://leetcode.com/problems/subsets/description/
 *
 * algorithms
 * Medium (56.68%)
 * Likes:    2758
 * Dislikes: 64
 * Total Accepted:    466.8K
 * Total Submissions: 816.2K
 * Testcase Example:  '[1,2,3]'
 *
 * Given a set of distinct integers, nums, return all possible subsets (the
 * power set).
 *
 * Note: The solution set must not contain duplicate subsets.
 *
 * Example:
 *
 *
 * Input: nums = [1,2,3]
 * Output:
 * [
 * ⁠ [3],
 * [1],
 * [2],
 * [1,2,3],
 * [1,3],
 * [2,3],
 * [1,2],
 * []
 * ]
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const ans = [];
  sets([], 0);

  function sets(arr, srt) {
    ans.push(arr);
    for (let i = srt; i < nums.length; i++) {
      sets([...arr, nums[i]], i + 1);
    }
  }

  return ans;
};
// @lc code=end
