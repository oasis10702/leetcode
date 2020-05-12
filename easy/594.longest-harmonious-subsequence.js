/*
 * @lc app=leetcode id=594 lang=javascript
 *
 * [594] Longest Harmonious Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  const tb = {};
  let max = 0;

  for (let n of nums) {
    tb[n] = tb[n] + 1 || 1;
  }

  // try parseInt or Number
  for (let key in tb) {
    if (tb[parseInt(key) + 1]) {
      max = Math.max(max, tb[key] + tb[parseInt(key) + 1]);
    }
  }

  return max;
};
// @lc code=end
