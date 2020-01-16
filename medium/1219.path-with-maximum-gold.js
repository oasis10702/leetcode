/*
 * @lc app=leetcode id=1219 lang=javascript
 *
 * [1219] Path with Maximum Gold
 *
 * https://leetcode.com/problems/path-with-maximum-gold/description/
 *
 * algorithms
 * Medium (62.10%)
 * Likes:    222
 * Dislikes: 11
 * Total Accepted:    13.9K
 * Total Submissions: 22.1K
 * Testcase Example:  '[[0,6,0],[5,8,7],[0,9,0]]'
 *
 * In a gold mine grid of size m * n, each cell in this mine has an integer
 * representing the amount of gold in that cell, 0 if it is empty.
 *
 * Return the maximum amount of gold you can collect under the
 * conditions:
 *
 *
 * Every time you are located in a cell you will collect all the gold in that
 * cell.
 * From your position you can walk one step to the left, right, up or down.
 * You can't visit the same cell more than once.
 * Never visit a cell with 0 gold.
 * You can start and stop collecting gold from any position in the grid that
 * has some gold.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: grid = [[0,6,0],[5,8,7],[0,9,0]]
 * Output: 24
 * Explanation:
 * [[0,6,0],
 * ⁠[5,8,7],
 * ⁠[0,9,0]]
 * Path to get the maximum gold, 9 -> 8 -> 7.
 *
 *
 * Example 2:
 *
 *
 * Input: grid = [[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]]
 * Output: 28
 * Explanation:
 * [[1,0,7],
 * ⁠[2,0,6],
 * ⁠[3,4,5],
 * ⁠[0,3,0],
 * ⁠[9,0,20]]
 * Path to get the maximum gold, 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= grid.length, grid[i].length <= 15
 * 0 <= grid[i][j] <= 100
 * There are at most 25 cells containing gold.
 *
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const g = grid;
  let ans = 0;

  const isGoldCell = (x, y) =>
    x >= 0 && x < m && y >= 0 && y < n && g[x][y] > 0;

  const dfs = (x, y, cur) => {
    if (!isGoldCell(x, y)) return;
    cur += g[x][y];
    ans = Math.max(ans, cur);
    const tmp = g[x][y];
    g[x][y] = 0;

    dfs(x - 1, y, cur);
    dfs(x + 1, y, cur);
    dfs(x, y - 1, cur);
    dfs(x, y + 1, cur);

    g[x][y] = tmp;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dfs(i, j, 0);
    }
  }

  return ans;
};
// @lc code=end
