/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 *
 * https://leetcode.com/problems/3sum-closest/description/
 *
 * algorithms
 * Medium (45.70%)
 * Likes:    1489
 * Dislikes: 109
 * Total Accepted:    403.5K
 * Total Submissions: 882.7K
 * Testcase Example:  '[-1,2,1,-4]\n1'
 *
 * Given an array nums of n integers and an integer target, find three integers
 * in nums such that the sum is closest to target. Return the sum of the three
 * integers. You may assume that each input would have exactly one solution.
 *
 * Example:
 *
 *
 * Given array nums = [-1, 2, 1, -4], and target = 1.
 *
 * The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);
  let ans = nums[0] + nums[1] + nums[nums.length - 1];
  for (let i = 0; i < nums.length; i++) {
    let L = i + 1;
    let R = nums.length - 1;
    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R];
      if (sum > target) {
        R--;
      } else {
        L++;
      }
      if (Math.abs(sum - target) < Math.abs(ans - target)) {
        ans = sum;
      }
    }
  }

  return ans;
};
// @lc code=end
