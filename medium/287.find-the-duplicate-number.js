/*
 * @lc app=leetcode id=287 lang=javascript
 *
 * [287] Find the Duplicate Number
 *
 * https://leetcode.com/problems/find-the-duplicate-number/description/
 *
 * algorithms
 * Medium (51.83%)
 * Likes:    3678
 * Dislikes: 457
 * Total Accepted:    274.8K
 * Total Submissions: 519.3K
 * Testcase Example:  '[1,3,4,2,2]'
 *
 * Given an array nums containing n + 1 integers where each integer is between
 * 1 and n (inclusive), prove that at least one duplicate number must exist.
 * Assume that there is only one duplicate number, find the duplicate one.
 *
 * Example 1:
 *
 *
 * Input: [1,3,4,2,2]
 * Output: 2
 *
 *
 * Example 2:
 *
 *
 * Input: [3,1,3,4,2]
 * Output: 3
 *
 * Note:
 *
 *
 * You must not modify the array (assume the array is read only).
 * You must use only constant, O(1) extra space.
 * Your runtime complexity should be less than O(n^2).
 * There is only one duplicate number in the array, but it could be repeated
 * more than once.
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// tricky binary search
var findDuplicate = function(nums) {
  let left = 1;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let count = 0;

    for (let n of nums) {
      if (n <= mid) {
        count++;
      }
    }

    if (count > mid) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
};
// @lc code=end
