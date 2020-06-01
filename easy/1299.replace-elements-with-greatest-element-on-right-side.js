/*
 * @lc app=leetcode id=1299 lang=javascript
 *
 * [1299] Replace Elements with Greatest Element on Right Side
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      arr[i] = -1;
    } else {
      const sub = arr.slice(i + 1);
      arr[i] = Math.max(...sub);
    }
  }

  return arr;
};
// @lc code=end
