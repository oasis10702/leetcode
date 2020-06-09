/*
 * @lc app=leetcode id=1342 lang=javascript
 *
 * [1342] Number of Steps to Reduce a Number to Zero
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
  let count = 0;
  let obtain = num;

  while (obtain > 0) {
    if (obtain % 2 === 0) {
      obtain /= 2;
    } else {
      obtain--;
    }
    count++;
  }

  return count;
};
// @lc code=end
