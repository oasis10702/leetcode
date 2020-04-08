/*
 * @lc app=leetcode id=213 lang=javascript
 *
 * [213] House Robber II
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
  let prev2 = 0;
  let cur = 0;
  let cur2 = 0;

  for (let i = 0; i < n - 1; i++) {
    const tmp = Math.max(prev + nums[i], cur);
    prev = cur;
    cur = tmp;
  }

  for (let i = 1; i < n; i++) {
    const tmp = Math.max(prev2 + nums[i], cur2);
    prev2 = cur2;
    cur2 = tmp;
  }

  return Math.max(cur, cur2);
};
// @lc code=end
