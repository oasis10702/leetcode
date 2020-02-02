/*
 * @lc app=leetcode id=520 lang=javascript
 *
 * [520] Detect Capital
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  if (word === word.toUpperCase() || word === word.toLowerCase()) return true;

  const a = word[0];
  const b = word.slice(1);

  if (a === a.toUpperCase() && b === b.toLowerCase()) return true;

  return false;
};
// @lc code=end
