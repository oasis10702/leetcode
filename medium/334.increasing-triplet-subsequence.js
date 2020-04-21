/*
 * @lc app=leetcode id=334 lang=javascript
 *
 * [334] Increasing Triplet Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  let min = Number.MAX_VALUE;
  let mid = Number.MAX_VALUE;

  for (let n of nums) {
    if (n <= min) {
      min = n;
    } else if (n <= mid) {
      mid = n;
    } else {
      return true;
    }
  }

  return false;
};
// @lc code=end
