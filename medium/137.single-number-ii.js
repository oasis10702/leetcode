/*
 * @lc app=leetcode id=137 lang=javascript
 *
 * [137] Single Number II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const tb = {};
  for (let n of nums) {
    tb[n] = tb[n] ? tb[n] + 1 : 1;
  }
  for (let n in tb) {
    if (tb[n] === 1) return n;
  }
};
// @lc code=end
