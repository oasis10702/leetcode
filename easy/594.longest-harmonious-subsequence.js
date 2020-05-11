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
    tb[n] = tb[n] ? tb[n] + 1 : 1;
  }

  const keys = Object.keys(tb).sort((a, b) => a - b);

  for (let i = 0; i < keys.length - 1; i++) {
    if (Math.abs(keys[i] - keys[i + 1]) === 1) {
      max = Math.max(max, tb[keys[i]] + tb[keys[i + 1]]);
    }
  }
  return max;
};
// @lc code=end
