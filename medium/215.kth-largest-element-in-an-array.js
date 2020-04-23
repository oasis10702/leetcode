/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// solution 1 - quick sort
var findKthLargest = function(nums, k) {
  nums.sort((a, b) => b - a);

  return nums[k - 1];
};

// TODO: using quick select
// var findKthLargest = function(nums, k) {};

// const quickSelect = (nums, lo, hi, k) => {
//   for (let i = lo, j = lo; j < hi; j++) {
//     if (nums[j] <= nums[hi]) {
//       swap(nums, i, j);
//     }
//   }
// };

// const swap = (arr, i, j) => {
//   [arr[i], arr[j]] = [arr[j], arr[i]];
// };

// @lc code=end
