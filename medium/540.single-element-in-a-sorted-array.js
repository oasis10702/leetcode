/*
 * @lc app=leetcode id=540 lang=javascript
 *
 * [540] Single Element in a Sorted Array
 *
 * https://leetcode.com/problems/single-element-in-a-sorted-array/description/
 *
 * algorithms
 * Medium (57.55%)
 * Likes:    1042
 * Dislikes: 72
 * Total Accepted:    77K
 * Total Submissions: 133.6K
 * Testcase Example:  '[1,1,2,3,3,4,4,8,8]'
 *
 * You are given a sorted array consisting of only integers where every element
 * appears exactly twice, except for one element which appears exactly once.
 * Find this single element that appears only once.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: [1,1,2,3,3,4,4,8,8]
 * Output: 2
 *
 *
 * Example 2:
 *
 *
 * Input: [3,3,7,7,10,11,11]
 * Output: 10
 *
 *
 *
 *
 * Note: Your solution should run in O(log n) time and O(1) space.
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  let lo = 0;
  let hi = nums.length - 1;

  while (lo < hi) {
    const mid = (lo + hi) / 2;
    const isEven = (hi - mid) % 2 === 0;
    if (nums[mid + 1] === nums[mid]) {
      if (isEven) {
        lo = mid + 2;
      } else {
        hi = mid - 1;
      }
    } else if (nums[mid - 1] === nums[mid]) {
      if (isEven) {
        hi = mid - 2;
      } else {
        lo = mid + 1;
      }
    } else {
      return nums[mid];
    }
  }

  return nums[lo];
};
// @lc code=end
