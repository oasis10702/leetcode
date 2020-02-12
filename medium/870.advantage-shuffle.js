/*
 * @lc app=leetcode id=870 lang=javascript
 *
 * [870] Advantage Shuffle
 *
 * https://leetcode.com/problems/advantage-shuffle/description/
 *
 * algorithms
 * Medium (43.96%)
 * Likes:    370
 * Dislikes: 23
 * Total Accepted:    16.1K
 * Total Submissions: 36.4K
 * Testcase Example:  '[2,7,11,15]\n[1,10,4,11]'
 *
 * Given two arrays A and B of equal size, the advantage of A with respect to B
 * is the number of indices i for which A[i] > B[i].
 *
 * Return any permutation of A that maximizes its advantage with respect to
 * B.
 *
 *
 *
 *
 * Example 1:
 *
 *
 * Input: A = [2,7,11,15], B = [1,10,4,11]
 * Output: [2,11,7,15]
 *
 *
 *
 * Example 2:
 *
 *
 * Input: A = [12,24,8,32], B = [13,25,32,11]
 * Output: [24,32,8,12]
 *
 *
 *
 *
 * Note:
 *
 *
 * 1 <= A.length = B.length <= 10000
 * 0 <= A[i] <= 10^9
 * 0 <= B[i] <= 10^9
 *
 *
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var advantageCount = function(A, B) {
  const ans = [];
  const take = {};
  A.sort((a, b) => a - b);
  for (let b of B.slice().sort((a, b) => b - a)) {
    if (A[A.length - 1] > b) {
      if (!take[b]) take[b] = [];
      take[b].push(A.pop());
    }
  }

  for (let b of B) {
    ans.push(take[b] && take[b].length ? take[b].pop() : A.pop());
  }

  return ans;
};
// @lc code=end
