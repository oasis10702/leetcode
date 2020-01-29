/*
 * @lc app=leetcode id=1013 lang=javascript
 *
 * [1013] Partition Array Into Three Parts With Equal Sum
 *
 * https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/description/
 *
 * algorithms
 * Easy (56.75%)
 * Likes:    265
 * Dislikes: 45
 * Total Accepted:    24.7K
 * Total Submissions: 43.4K
 * Testcase Example:  '[0,2,1,-6,6,-7,9,1,2,0,1]'
 *
 * Given an array A of integers, return true if and only if we can partition
 * the array into three non-empty parts with equal sums.
 *
 * Formally, we can partition the array if we can find indexes i+1 < j with
 * (A[0] + A[1] + ... + A[i] == A[i+1] + A[i+2] + ... + A[j-1] == A[j] + A[j-1]
 * + ... + A[A.length - 1])
 *
 *
 *
 * Example 1:
 *
 *
 * Input: [0,2,1,-6,6,-7,9,1,2,0,1]
 * Output: true
 * Explanation: 0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
 *
 *
 *
 * Example 2:
 *
 *
 * Input: [0,2,1,-6,6,7,9,-1,2,0,1]
 * Output: false
 *
 *
 *
 * Example 3:
 *
 *
 * Input: [3,3,6,5,-2,2,5,1,-9,4]
 * Output: true
 * Explanation: 3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4
 *
 *
 *
 *
 *
 *
 * Note:
 *
 *
 * 3 <= A.length <= 50000
 * -10000 <= A[i] <= 10000
 *
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
  const sum = A.reduce((a, b) => a + b, 0);
  let part = 0;
  let count = 0;

  if (sum % 3 !== 0) return false;

  for (let a of A) {
    part += a;
    if (part === sum / 3) {
      count++;
      part = 0;
    }
  }

  return count === 3;
};
// @lc code=end
