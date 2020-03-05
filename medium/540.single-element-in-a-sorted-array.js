/*
 * @lc app=leetcode id=540 lang=javascript
 *
 * [540] Single Element in a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  /* O(n)
  let p = 0;
  while (p <= nums.length - 1) {
    if (nums[p] !== nums[p + 1]) return nums[p];
    p += 2;
  }
  */
  let lo = 0;
  let hi = nums.length - 1;
  /* two pointer #1
    while (lo < hi) {
      const mid = Math.floor((lo + hi) / 2);
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
  */
  // two pointer #2
  while (lo < hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (mid % 2 === 1) mid--;
    if (nums[mid] === nums[mid + 1]) {
      lo = mid + 2;
    } else {
      hi = mid;
    }
  }

  return nums[lo];
};
// @lc code=end
