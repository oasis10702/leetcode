/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  let tb = {};
  let count = s.length;
  for (let c of s) {
    if (tb[c]) {
      tb[c]++;
    } else {
      tb[c] = 1;
    }
  }

  for (let c of t) {
    if (tb[c] === undefined) {
      return false;
    } else if (tb[c]) {
      count--;
      tb[c]--;
    }
  }

  return count === 0;
};
// @lc code=end
