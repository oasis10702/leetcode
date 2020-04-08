/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const n = nums.length;
  if (n === 0) return 0;
  if (n === 1) return nums[0];
  let prev = 0;
  let cur = 0;

  for (let i = 0; i < n; i++) {
    const tmp = Math.max(prev + nums[i], cur);
    prev = cur;
    cur = tmp;
  }

  return cur;
};
// @lc code=end
