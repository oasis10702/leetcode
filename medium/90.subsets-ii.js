/*
 * @lc app=leetcode id=90 lang=javascript
 *
 * [90] Subsets II
 *
 * https://leetcode.com/problems/subsets-ii/description/
 *
 * algorithms
 * Medium (44.55%)
 * Likes:    1259
 * Dislikes: 56
 * Total Accepted:    241.6K
 * Total Submissions: 539.6K
 * Testcase Example:  '[1,2,2]'
 *
 * Given a collection of integers that might contain duplicates, nums, return
 * all possible subsets (the power set).
 *
 * Note: The solution set must not contain duplicate subsets.
 *
 * Example:
 *
 *
 * Input: [1,2,2]
 * Output:
 * [
 * ⁠ [2],
 * ⁠ [1],
 * ⁠ [1,2,2],
 * ⁠ [2,2],
 * ⁠ [1,2],
 * ⁠ []
 * ]
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  nums.sort((a, b) => a - b);
  const ans = [];
  const db = {};
  backtrack([], 0);

  function backtrack(cur, pos) {
    if (!db[cur]) {
      ans.push(cur);
      db[cur] = true;
    } else {
      return;
    }
    for (let i = pos; i < nums.length; i++) {
      cur.push(nums[i]);
      backtrack([...cur], i + 1);
      cur.pop();
    }
  }
  return ans;
};
// @lc code=end
