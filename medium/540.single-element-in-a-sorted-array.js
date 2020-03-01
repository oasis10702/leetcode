/*
 * @lc app=leetcode id=540 lang=javascript
 *
 * [540] Single Element in a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  let p = 0;
  while (p <= nums.length - 1) {
    if (nums[p] !== nums[p + 1]) return nums[p];
    p += 2;
  }
};
// @lc code=end
