/*
 * @lc app=leetcode id=1304 lang=javascript
 *
 * [1304] Find N Unique Integers Sum up to Zero
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
  let arr = [];
  if (n % 2 === 0) {
    for (let i = 1; i <= n / 2; i++) {
      arr.push(i);
    }

    return arr.concat(arr.map(a => a * -1));
  } else {
    for (let i = 1; i <= (n - 1) / 2; i++) {
      arr.push(i);
    }

    return arr.concat(
      arr.map(a => a * -1),
      [0]
    );
  }
};
// @lc code=end
