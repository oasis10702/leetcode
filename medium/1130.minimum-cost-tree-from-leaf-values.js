/*
 * @lc app=leetcode id=1130 lang=javascript
 *
 * [1130] Minimum Cost Tree From Leaf Values
 *
 * https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/description/
 *
 * algorithms
 * Medium (63.02%)
 * Likes:    524
 * Dislikes: 47
 * Total Accepted:    15.7K
 * Total Submissions: 24.5K
 * Testcase Example:  '[6,2,4]'
 *
 * Given an array arr of positive integers, consider all binary trees such
 * that:
 *
 *
 * Each node has either 0 or 2 children;
 * The values of arr correspond to the values of each leaf in an in-order
 * traversal of the tree.  (Recall that a node is a leaf if and only if it has
 * 0 children.)
 * The value of each non-leaf node is equal to the product of the largest leaf
 * value in its left and right subtree respectively.
 *
 *
 * Among all possible binary trees considered, return the smallest possible sum
 * of the values of each non-leaf node.  It is guaranteed this sum fits into a
 * 32-bit integer.
 *
 *
 * Example 1:
 *
 *
 * Input: arr = [6,2,4]
 * Output: 32
 * Explanation:
 * There are two possible trees.  The first has non-leaf node sum 36, and the
 * second has non-leaf node sum 32.
 *
 * ⁠   24            24
 * ⁠  /  \          /  \
 * ⁠ 12   4        6    8
 * ⁠/  \               / \
 * 6    2             2   4
 *
 *
 *
 * Constraints:
 *
 *
 * 2 <= arr.length <= 40
 * 1 <= arr[i] <= 15
 * It is guaranteed that the answer fits into a 32-bit signed integer (ie. it
 * is less than 2^31).
 *
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
/* dp solution
var mctFromLeafValues = function(arr) {
  const len = arr.length;
  const dp = new Array(len)
    .fill(0)
    .map(() => new Array(len).fill(Number.MAX_VALUE));
  const max = new Array(len).fill(0).map(() => new Array(len).fill(0));

  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      max[i][j] = Math.max(...arr.slice(i, j + 1));
    }
  }

  // init
  for (let i = 0; i < len; i++) {
    dp[i][i] = 0;
  }

  for (let i = 0; i < len - 1; i++) {
    dp[i][i + 1] = arr[i] * arr[i + 1];
  }

  for (let i = 2; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      for (let k = j; k < i + j; k++) {
        dp[j][j + i] = Math.min(
          dp[j][j + i],
          dp[j][k] + dp[k + 1][i + j] + max[j][k] * max[k + 1][i + j]
        );
      }
    }
  }

  return dp[0][len - 1];
};
*/
var mctFromLeafValues = function(arr) {
  const stack = [Number.MAX_VALUE];
  let ans = 0;

  for (let a of arr) {
    while (stack[stack.length - 1] < a) {
      ans += stack.pop() * Math.min(stack[stack.length - 1], a);
    }
    stack.push(a);
  }

  while (stack.length > 2) {
    ans += stack.pop() * stack[stack.length - 1];
  }

  return ans;
};
// @lc code=end
