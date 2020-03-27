/*
 * @lc app=leetcode id=81 lang=javascript
 *
 * [81] Search in Rotated Sorted Array II
 *
 * https://leetcode.com/problems/search-in-rotated-sorted-array-ii/description/
 *
 * algorithms
 * Medium (32.84%)
 * Likes:    1017
 * Dislikes: 426
 * Total Accepted:    216.2K
 * Total Submissions: 656.3K
 * Testcase Example:  '[2,5,6,0,0,1,2]\n0'
 *
 * Suppose an array sorted in ascending order is rotated at some pivot unknown
 * to you beforehand.
 *
 * (i.e., [0,0,1,2,2,5,6] might become [2,5,6,0,0,1,2]).
 *
 * You are given a target value to search. If found in the array return true,
 * otherwise return false.
 *
 * Example 1:
 *
 *
 * Input: nums = [2,5,6,0,0,1,2], target = 0
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [2,5,6,0,0,1,2], target = 3
 * Output: false
 *
 * Follow up:
 *
 *
 * This is a follow up problem to Search in Rotated Sorted Array, where nums
 * may contain duplicates.
 * Would this affect the run-time complexity? How and why?
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  // find rotate point
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return true;
      // [left, mid] is sorted
    } else if (nums[mid] > nums[left]) {
      // check target is in left half
      if (target < nums[mid] && target >= nums[left]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
      // [mid, right] is sorted
    } else if (nums[mid] < nums[left]) {
      // check target  is in right half
      if (target > nums[mid] && target < nums[left]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      left++;
    }
  }

  return false;
};
// @lc code=end
