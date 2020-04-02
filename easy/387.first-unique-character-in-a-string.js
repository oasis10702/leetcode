/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const tb = {};

  for (let char of s) {
    tb[char] = tb[char] ? tb[char] + 1 : 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (tb[s[i]] === 1) {
      return i;
    }
  }

  return -1;
};
// @lc code=end
