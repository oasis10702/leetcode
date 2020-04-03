/*
 * @lc app=leetcode id=290 lang=javascript
 *
 * [290] Word Pattern
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  str = str.split(' ');
  if (str.length !== pattern.length) return false;
  const tb = {};
  let i = 0;

  for (let p of pattern) {
    if (!tb[p]) {
      if (Object.values(tb).indexOf(str[i]) !== -1) {
        return false;
      }
      tb[p] = str[i];
    } else {
      if (tb[p] !== str[i]) {
        return false;
      }
    }
    i++;
  }

  return true;
};
// @lc code=end
