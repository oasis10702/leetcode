/*
 * @lc app=leetcode id=80 lang=javascript
 *
 * [80] Remove Duplicates from Sorted Array II
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/
 *
 * algorithms
 * Medium (42.01%)
 * Likes:    869
 * Dislikes: 634
 * Total Accepted:    235.7K
 * Total Submissions: 557.4K
 * Testcase Example:  '[1,1,1,2,2,3]'
 *
 * Given a sorted array nums, remove the duplicates in-place such that
 * duplicates appeared at most twice and return the new length.
 *
 * Do not allocate extra space for another array, you must do this by modifying
 * the input array in-place with O(1) extra memory.
 *
 * Example 1:
 *
 *
 * Given nums = [1,1,1,2,2,3],
 *
 * Your function should return length = 5, with the first five elements of nums
 * being 1, 1, 2, 2 and 3 respectively.
 *
 * It doesn't matter what you leave beyond the returned length.
 *
 * Example 2:
 *
 *
 * Given nums = [0,0,1,1,1,1,2,3,3],
 *
 * Your function should return length = 7, with the first seven elements of
 * nums being modified to 0, 0, 1, 1, 2, 3 and 3 respectively.
 *
 * It doesn't matter what values are set beyond the returned length.
 *
 *
 * Clarification:
 *
 * Confused why the returned value is an integer but your answer is an array?
 *
 * Note that the input array is passed in by reference, which means
 * modification to the input array will be known to the caller as well.
 *
 * Internally you can think of this:
 *
 *
 * // nums is passed in by reference. (i.e., without making a copy)
 * int len = removeDuplicates(nums);
 *
 * // any modification to nums in your function would be known by the caller.
 * // using the length returned by your function, it prints the first len
 * elements.
 * for (int i = 0; i < len; i++) {
 * print(nums[i]);
 * }
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  //   let count = 0;
  //   let cur;
  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] !== cur) {
  //       cur = nums[i];
  //       count = 1;
  //     } else {
  //       count++;
  //     }

  //     if (count > 2) {
  //       nums.splice(i, 1);
  //       i--;
  //     }
  //   }

  //   return nums.length;

  let index = 0;
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[index]) {
      count++;
    } else {
      count = 1;
    }

    if (count <= 2) index++;
    nums[index] = nums[i];
  }

  return index + 1;
};
// @lc code=end
