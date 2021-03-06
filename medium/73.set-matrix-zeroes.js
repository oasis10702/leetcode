/*
 * @lc app=leetcode id=73 lang=javascript
 *
 * [73] Set Matrix Zeroes
 *
 * https://leetcode.com/problems/set-matrix-zeroes/description/
 *
 * algorithms
 * Medium (41.48%)
 * Likes:    1507
 * Dislikes: 250
 * Total Accepted:    263.7K
 * Total Submissions: 632.1K
 * Testcase Example:  '[[1,1,1],[1,0,1],[1,1,1]]'
 *
 * Given a m x n matrix, if an element is 0, set its entire row and column to
 * 0. Do it in-place.
 *
 * Example 1:
 *
 *
 * Input:
 * [
 * [1,1,1],
 * [1,0,1],
 * [1,1,1]
 * ]
 * Output:
 * [
 * [1,0,1],
 * [0,0,0],
 * [1,0,1]
 * ]
 *
 *
 * Example 2:
 *
 *
 * Input:
 * [
 * [0,1,2,0],
 * [3,4,5,2],
 * [1,3,1,5]
 * ]
 * Output:
 * [
 * [0,0,0,0],
 * [0,4,5,0],
 * [0,3,1,0]
 * ]
 *
 *
 * Follow up:
 *
 *
 * A straight forward solution using O(mn) space is probably a bad idea.
 * A simple improvement uses O(m + n) space, but still not the best
 * solution.
 * Could you devise a constant space solution?
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const row = matrix.length;
  const col = matrix[0].length;
  let fr = false;
  let fc = false;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] === 0) {
        if (i === 0) fr = true;
        if (j === 0) fc = true;
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) matrix[i][j] = 0;
    }
  }

  if (fr) {
    for (let j = 0; j < col; j++) {
      matrix[0][j] = 0;
    }
  }

  if (fc) {
    for (let i = 0; i < row; i++) {
      matrix[i][0] = 0;
    }
  }

  return matrix;
};
// @lc code=end
