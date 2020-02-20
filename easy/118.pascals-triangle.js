/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 *
 * https://leetcode.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (49.09%)
 * Likes:    954
 * Dislikes: 85
 * Total Accepted:    312.4K
 * Total Submissions: 636.2K
 * Testcase Example:  '5'
 *
 * Given a non-negative integer numRows, generate the first numRows of Pascal's
 * triangle.
 *
 *
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it.
 *
 * Example:
 *
 *
 * Input: 5
 * Output:
 * [
 * ⁠    [1],
 * ⁠   [1,1],
 * ⁠  [1,2,1],
 * ⁠ [1,3,3,1],
 * ⁠[1,4,6,4,1]
 * ]
 *
 *
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];
  const pascal = [[1], [1, 1]];
  let arr = [];

  for (let i = 2; i < numRows; i++) {
    arr = [];
    for (let j = 1; j < i; j++) {
      arr.push(pascal[i - 1][j - 1] + pascal[i - 1][j]);
    }
    pascal.push([1, ...arr, 1]);
  }

  return pascal;
};
// @lc code=end
