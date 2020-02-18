/*
 * @lc app=leetcode id=670 lang=javascript
 *
 * [670] Maximum Swap
 *
 * https://leetcode.com/problems/maximum-swap/description/
 *
 * algorithms
 * Medium (41.33%)
 * Likes:    741
 * Dislikes: 54
 * Total Accepted:    50.8K
 * Total Submissions: 122K
 * Testcase Example:  '2736'
 *
 *
 * Given a non-negative integer, you could swap two digits at most once to get
 * the maximum valued number. Return the maximum valued number you could get.
 *
 *
 * Example 1:
 *
 * Input: 2736
 * Output: 7236
 * Explanation: Swap the number 2 and the number 7.
 *
 *
 *
 * Example 2:
 *
 * Input: 9973
 * Output: 9973
 * Explanation: No swap.
 *
 *
 *
 *
 * Note:
 *
 * The given number is in the range [0, 10^8]
 *
 *
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
  const arr = String(num).split('');
  const max = [...arr].sort((a, b) => b - a);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== max[i]) {
      const idx = String(num).lastIndexOf(max[i]);
      [arr[i], arr[idx]] = [arr[idx], arr[i]];
      break;
    }
  }

  return Number(arr.join(''));
};
// @lc code=end
