/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 *
 * https://leetcode.com/problems/unique-paths-ii/description/
 *
 * algorithms
 * Medium (33.79%)
 * Likes:    1198
 * Dislikes: 193
 * Total Accepted:    246.9K
 * Total Submissions: 729.9K
 * Testcase Example:  '[[0,0,0],[0,1,0],[0,0,0]]'
 *
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in
 * the diagram below).
 *
 * The robot can only move either down or right at any point in time. The robot
 * is trying to reach the bottom-right corner of the grid (marked 'Finish' in
 * the diagram below).
 *
 * Now consider if some obstacles are added to the grids. How many unique paths
 * would there be?
 *
 *
 *
 * An obstacle and empty space is marked as 1 and 0 respectively in the grid.
 *
 * Note: m and n will be at most 100.
 *
 * Example 1:
 *
 *
 * Input:
 * [
 * [0,0,0],
 * [0,1,0],
 * [0,0,0]
 * ]
 * Output: 2
 * Explanation:
 * There is one obstacle in the middle of the 3x3 grid above.
 * There are two ways to reach the bottom-right corner:
 * 1. Right -> Right -> Down -> Down
 * 2. Down -> Down -> Right -> Right
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const row = obstacleGrid.length;
  const col = obstacleGrid[0].length;
  const path = Array.from(Array(row), () => new Array(col));
  if (obstacleGrid[0][0] === 1) return 0;
  path[0][0] = 1;
  for (let i = 1; i < row; i++) {
    path[i][0] =
      obstacleGrid[i - 1][0] === 1 || obstacleGrid[i][0] === 1
        ? 0
        : path[i - 1][0];
  }

  for (let i = 1; i < col; i++) {
    path[0][i] =
      obstacleGrid[0][i - 1] === 1 || obstacleGrid[0][i] === 1
        ? 0
        : path[0][i - 1];
  }

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      path[i][j] =
        obstacleGrid[i][j] === 1 ? 0 : path[i - 1][j] + path[i][j - 1];
    }
  }

  return path[row - 1][col - 1];
};
// @lc code=end
