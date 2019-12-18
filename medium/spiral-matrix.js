/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 *
 * https://leetcode.com/problems/spiral-matrix/description/
 *
 * algorithms
 * Medium (32.17%)
 * Likes:    1575
 * Dislikes: 473
 * Total Accepted:    294.3K
 * Total Submissions: 914.6K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * Given a matrix of m x n elements (m rows, n columns), return all elements of
 * the matrix in spiral order.
 *
 * Example 1:
 *
 *
 * Input:
 * [
 * ⁠[ 1, 2, 3 ],
 * ⁠[ 4, 5, 6 ],
 * ⁠[ 7, 8, 9 ]
 * ]
 * Output: [1,2,3,6,9,8,7,4,5]
 *
 *
 * Example 2:
 *
 * Input:
 * [
 * ⁠ [1, 2, 3, 4],
 * ⁠ [5, 6, 7, 8],
 * ⁠ [9,10,11,12]
 * ]
 * Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 *
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (!matrix.length) return [];
  const arr = [];
  let endRow = matrix.length - 1;
  let endCol = matrix[0].length - 1;
  let srtCol = 0;
  let strRow = 0;
  let counter = 0;
  let n = matrix.length * matrix[0].length;

  while (srtCol <= endCol && strRow <= endRow) {
    // top row
    for (let i = srtCol; i <= endCol; i++) {
      arr.push(matrix[strRow][i]);
      counter++;
    }
    strRow++;
    if (counter >= n) return arr;
    // right col
    for (let i = strRow; i <= endRow; i++) {
      arr.push(matrix[i][endCol]);
      counter++;
    }
    endCol--;
    if (counter >= n) return arr;
    // bottom row
    for (let i = endCol; i >= srtCol; i--) {
      arr.push(matrix[endRow][i]);
      counter++;
    }
    endRow--;
    if (counter >= n) return arr;
    // left col
    for (let i = endRow; i >= strRow; i--) {
      arr.push(matrix[i][srtCol]);
      counter++;
    }
    srtCol++;
    if (counter >= n) return arr;
  }

  return arr;
};
// @lc code=end
