/*
 * @lc app=leetcode id=541 lang=javascript
 *
 * [541] Reverse String II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  let ans = '';
  for (let i = 0; i < s.length; i = i + k) {
    const sub = s.slice(i, i + k);
    ans += (i / k) % 2 === 0 ? reverse(sub) : sub;
  }

  return ans;
};

function reverse(s) {
  return s
    .split('')
    .reverse()
    .join('');
}
// @lc code=end
