/*
 * @lc app=leetcode id=456 lang=javascript
 *
 * [456] 132 Pattern
 *
 * https://leetcode.com/problems/132-pattern/description/
 *
 * algorithms
 * Medium (28.17%)
 * Likes:    1040
 * Dislikes: 70
 * Total Accepted:    45.1K
 * Total Submissions: 157.7K
 * Testcase Example:  '[1,2,3,4]'
 *
 *
 * Given a sequence of n integers a1, a2, ..., an, a 132 pattern is a
 * subsequence ai, aj, ak such
 * that i < j < k and ai < ak < aj. Design an algorithm that takes a list of n
 * numbers as input and checks whether there is a 132 pattern in the list.
 *
 * Note: n will be less than 15,000.
 *
 * Example 1:
 *
 * Input: [1, 2, 3, 4]
 *
 * Output: False
 *
 * Explanation: There is no 132 pattern in the sequence.
 *
 *
 *
 * Example 2:
 *
 * Input: [3, 1, 4, 2]
 *
 * Output: True
 *
 * Explanation: There is a 132 pattern in the sequence: [1, 4, 2].
 *
 *
 *
 * Example 3:
 *
 * Input: [-1, 3, 2, 0]
 *
 * Output: True
 *
 * Explanation: There are three 132 patterns in the sequence: [-1, 3, 2], [-1,
 * 3, 0] and [-1, 2, 0].
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
  let s3 = -Number.MAX_VALUE;
  const stack = [];
  let n = stack.length;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < s3) return true;
    while (n && nums[i] > stack[n - 1]) {
      s3 = stack.pop();
      n--;
    }
    stack.push(nums[i]);
    n++;
  }
  return false;
};
// @lc code=end
