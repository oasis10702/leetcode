/*
 * @lc app=leetcode id=739 lang=javascript
 *
 * [739] Daily Temperatures
 *
 * https://leetcode.com/problems/daily-temperatures/description/
 *
 * algorithms
 * Medium (61.44%)
 * Likes:    2074
 * Dislikes: 66
 * Total Accepted:    121.6K
 * Total Submissions: 196.3K
 * Testcase Example:  '[73,74,75,71,69,72,76,73]'
 *
 *
 * Given a list of daily temperatures T, return a list such that, for each day
 * in the input, tells you how many days you would have to wait until a warmer
 * temperature.  If there is no future day for which this is possible, put 0
 * instead.
 *
 * For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76,
 * 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].
 *
 *
 * Note:
 * The length of temperatures will be in the range [1, 30000].
 * Each temperature will be an integer in the range [30, 100].
 *
 */

// @lc code=start
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  for (let i = 0; i < T.length; i++) {
    if (i === T.length - 1) T[i] = 0;
    for (let j = i + 1; j < T.length; j++) {
      if (T[j] > T[i]) {
        T[i] = j - i;
        break;
      } else if (j === T.length - 1) {
        T[i] = 0;
      }
    }
  }

  return T;
};
// @lc code=end
