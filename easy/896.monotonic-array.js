/*
 * @lc app=leetcode id=896 lang=javascript
 *
 * [896] Monotonic Array
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
  let isIncrease = false;
  let isDecrease = false;
  for (let i = 0; i < A.length - 1; i++) {
    if (A[i + 1] === A[i]) {
      continue;
    } else if (A[i + 1] > A[i]) {
      isIncrease = true;
    } else {
      isDecrease = true;
    }

    if (isDecrease && isIncrease) return false;
  }

  return true;
};
// @lc code=end
