/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let p = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count++;
    } else {
      nums[p] = nums[i];
      p++;
    }
  }

  while (count !== 0) {
    nums[p] = 0;
    p++;
    count--;
  }
};
// @lc code=end
