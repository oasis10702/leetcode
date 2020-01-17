/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 *
 * https://leetcode.com/problems/squares-of-a-sorted-array/description/
 *
 * algorithms
 * Easy (71.90%)
 * Likes:    673
 * Dislikes: 68
 * Total Accepted:    141.3K
 * Total Submissions: 195.9K
 * Testcase Example:  '[-4,-1,0,3,10]'
 *
 * Given an array of integers A sorted in non-decreasing order, return an array
 * of the squares of each number, also in sorted non-decreasing order.
 *
 *
 *
 *
 * Example 1:
 *
 *
 * Input: [-4,-1,0,3,10]
 * Output: [0,1,9,16,100]
 *
 *
 *
 * Example 2:
 *
 *
 * Input: [-7,-3,2,3,11]
 * Output: [4,9,9,49,121]
 *
 *
 *
 *
 * Note:
 *
 *
 * 1 <= A.length <= 10000
 * -10000 <= A[i] <= 10000
 * A is sorted in non-decreasing order.
 *
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  if (A.length === 1) return [A[0] ** 2];
  const result = [];
  let i = 0;
  let j = A.length - 1;
  while (i <= j) {
    if (Math.abs(A[i]) > Math.abs(A[j])) {
      result.unshift(A[i] ** 2);
      i++;
    } else {
      result.unshift(A[j] ** 2);
      j--;
    }
  }

  return result;
};
// @lc code=end
