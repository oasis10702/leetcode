/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const ans = [];
  backtrack(0, 0, '');

  function backtrack(left, right, cur) {
    if (left === n && right === n) {
      ans.push(cur);
      return;
    }

    if (left < n) {
      const tmp = cur;
      cur += '(';
      backtrack(left + 1, right, cur);
      cur = tmp;
    }

    if (left > right && right < n) {
      cur += ')';
      backtrack(left, right + 1, cur);
    }
  }

  return ans;
};
// @lc code=end
