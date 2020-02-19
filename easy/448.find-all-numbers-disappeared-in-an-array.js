import { array } from 'prop-types';

/*
 * @lc app=leetcode id=448 lang=javascript
 *
 * [448] Find All Numbers Disappeared in an Array
 *
 * https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/
 *
 * algorithms
 * Easy (54.66%)
 * Likes:    2268
 * Dislikes: 205
 * Total Accepted:    210.2K
 * Total Submissions: 381.7K
 * Testcase Example:  '[4,3,2,7,8,2,3,1]'
 *
 * Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some
 * elements appear twice and others appear once.
 *
 * Find all the elements of [1, n] inclusive that do not appear in this array.
 *
 * Could you do it without extra space and in O(n) runtime? You may assume the
 * returned list does not count as extra space.
 *
 * Example:
 *
 * Input:
 * [4,3,2,7,8,2,3,1]
 *
 * Output:
 * [5,6]
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  const ans = [];
  nums.forEach(n => {
    if (nums[Math.abs(n) - 1] > 0) nums[Math.abs(n) - 1] *= -1;
  });
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      ans.push(i + 1);
    }
  }

  return ans;
};
// @lc code=end
