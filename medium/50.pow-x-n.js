/*
 * @lc app=leetcode id=50 lang=javascript
 *
 * [50] Pow(x, n)
 *
 * https://leetcode.com/problems/powx-n/description/
 *
 * algorithms
 * Medium (28.88%)
 * Likes:    1096
 * Dislikes: 2551
 * Total Accepted:    392.3K
 * Total Submissions: 1.4M
 * Testcase Example:  '2.00000\n10'
 *
 * Implement pow(x, n), which calculates x raised to the power n (x^n).
 *
 * Example 1:
 *
 *
 * Input: 2.00000, 10
 * Output: 1024.00000
 *
 *
 * Example 2:
 *
 *
 * Input: 2.10000, 3
 * Output: 9.26100
 *
 *
 * Example 3:
 *
 *
 * Input: 2.00000, -2
 * Output: 0.25000
 * Explanation: 2^-2 = 1/2^2 = 1/4 = 0.25
 *
 *
 * Note:
 *
 *
 * -100.0 < x < 100.0
 * n is a 32-bit signed integer, within the range [−2^31, 2^31 − 1]
 *
 *
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (x === 0) return 0;
  if (n === 0 || x === 1) return 1;
  if (x === -1) return n % 2 === 0 ? 1 : -1;
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  return pow(x, n);

  function pow(p, q) {
    if (q === 0) return 1;
    const half = pow(p, Math.floor(q / 2));
    if (q % 2 === 0) {
      return half * half;
    } else {
      return half * half * p;
    }
  }
};
// @lc code=end
