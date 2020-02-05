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
  for (let i = 0; i < s.length; i++) {
    if (tb[s[i]]) {
      tb[s[i]]++;
    } else {
      tb[s[i]] = 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (tb[t[i]]) {
      count--;
      tb[t[i]]--;
    }
  }

  return count === 0;
};
// @lc code=end
