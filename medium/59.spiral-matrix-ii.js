/*
 * @lc app=leetcode id=59 lang=javascript
 *
 * [59] Spiral Matrix II
 *
 * https://leetcode.com/problems/spiral-matrix-ii/description/
 *
 * algorithms
 * Medium (50.22%)
 * Likes:    713
 * Dislikes: 96
 * Total Accepted:    167.1K
 * Total Submissions: 330.6K
 * Testcase Example:  '3'
 *
 * Given a positive integer n, generate a square matrix filled with elements
 * from 1 to n^2 in spiral order.
 *
 * Example:
 *
 *
 * Input: 3
 * Output:
 * [
 * ⁠[ 1, 2, 3 ],
 * ⁠[ 8, 9, 4 ],
 * ⁠[ 7, 6, 5 ]
 * ]
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  if (n === 0) return [[]];
  if (n === 1) return [[1]];
  let top = 0;
  let bottom = n - 1;
  let left = 0;
  let right = n - 1;
  let count = 1;

  const matrix = new Array(n).fill(0).map(() => new Array(n));

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      matrix[top][i] = count;
      count++;
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = count;
      count++;
    }
    right--;
    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = count;
      count++;
    }
    bottom--;
    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = count;
      count++;
    }
    left++;
  }

  return matrix;
};
// @lc code=end
