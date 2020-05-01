/*
 * @lc app=leetcode id=171 lang=javascript
 *
 * [171] Excel Sheet Column Number
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  let n = 0;

  for (let i = 0; i < s.length; i++) {
    n += Math.pow(26, i) * (s[s.length - 1 - i].charCodeAt(0) - 64);
  }

  return n;
};
// @lc code=end
