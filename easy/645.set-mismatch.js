/*
 * @lc app=leetcode id=645 lang=javascript
 *
 * [645] Set Mismatch
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  const ans = [];
  const tb = {};
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (!tb[nums[i]]) {
      tb[nums[i]] = 1;
    } else {
      tb[nums[i]]++;
    }
  }

  for (let i = 1; i <= n; i++) {
    if (tb[i] === 2) ans[0] = i;
    if (!tb[i]) ans[1] = i;
  }

  return ans;
};
// @lc code=end
