/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let lo = 0;
  let hi = nums.length - 1;

  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    const n = nums[mid];

    if (target === n) {
      return mid;
    } else if (target > n) {
      lo = mid + 1;
    } else if (target < n) {
      hi = mid - 1;
    }
  }

  return -1;
};
// @lc code=end
