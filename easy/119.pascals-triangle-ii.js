/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 *
 * https://leetcode.com/problems/pascals-triangle-ii/description/
 *
 * algorithms
 * Easy (46.16%)
 * Likes:    616
 * Dislikes: 186
 * Total Accepted:    245.5K
 * Total Submissions: 527.1K
 * Testcase Example:  '3'
 *
 * Given a non-negative index k where k ≤ 33, return the k^th index row of the
 * Pascal's triangle.
 *
 * Note that the row index starts from 0.
 *
 *
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it.
 *
 * Example:
 *
 *
 * Input: 3
 * Output: [1,3,3,1]
 *
 *
 * Follow up:
 *
 * Could you optimize your algorithm to use only O(k) extra space?
 *
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if (rowIndex === 0) return [1];
  if (rowIndex === 1) return [1, 1];
  const ans = [1, 1];
  for (let i = 1; i < rowIndex; i++) {
    for (let j = i; j >= 1; j--) {
      ans[j] += ans[j - 1];
    }
    ans.push(1);
  }

  return ans;
};
// @lc code=end
