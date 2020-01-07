/*
 * @lc app=leetcode id=64 lang=javascript
 *
 * [64] Minimum Path Sum
 *
 * https://leetcode.com/problems/minimum-path-sum/description/
 *
 * algorithms
 * Medium (49.80%)
 * Likes:    1915
 * Dislikes: 46
 * Total Accepted:    291.8K
 * Total Submissions: 582.5K
 * Testcase Example:  '[[1,3,1],[1,5,1],[4,2,1]]'
 *
 * Given a m x n grid filled with non-negative numbers, find a path from top
 * left to bottom right which minimizes the sum of all numbers along its path.
 *
 * Note: You can only move either down or right at any point in time.
 *
 * Example:
 *
 *
 * Input:
 * [
 * [1,3,1],
 * ⁠ [1,5,1],
 * ⁠ [4,2,1]
 * ]
 * Output: 7
 * Explanation: Because the path 1→3→1→1→1 minimizes the sum.
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  let sum = grid;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (i !== 0 && j !== 0) {
        sum[i][j] = Math.min(
          sum[i - 1][j] + sum[i][j],
          sum[i][j - 1] + sum[i][j]
        );
      } else if (i - 1 < 0 && j !== 0) {
        sum[i][j] += sum[i][j - 1];
      } else if (j - 1 < 0 && i !== 0) {
        sum[i][j] += sum[i - 1][j];
      }
    }
  }

  return sum[grid.length - 1][grid[0].length - 1];
};
// @lc code=end
