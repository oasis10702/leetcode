/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];

  for (let char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else if (char === ')' && stack.pop() === '(') {
      continue;
    } else if (char === ']' && stack.pop() === '[') {
      continue;
    } else if (char === '}' && stack.pop() === '{') {
      continue;
    } else {
      return false;
    }
  }

  return s.length % 2 === 0 && stack.length === 0;
};
// @lc code=end
