/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 */

// @lc code=start
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  if (nums.length === 0) return 0;
  let min = Number.MAX_VALUE;
  let i = 0;
  let j = 0;
  let sum = 0;

  while (j < nums.length) {
    sum += nums[j];
    j++;

    while (sum >= s) {
      min = Math.min(min, j - i);
      sum -= nums[i];
      i++;
    }
  }

  return min === Number.MAX_VALUE ? 0 : min;
};
// @lc code=end
