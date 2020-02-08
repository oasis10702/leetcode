/*
 * @lc app=leetcode id=1302 lang=javascript
 *
 * [1302] Deepest Leaves Sum
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
  const deepest = getDeepest(root, 0);
  let sum = 0;
  getSum(root, 0);

  function getSum(node, level) {
    if (!node) return null;
    if (level === deepest) {
      sum += node.val;
    } else {
      getSum(node.left, level + 1);
      getSum(node.right, level + 1);
    }
  }

  return sum;
};

function getDeepest(node, level) {
  if (!node) return level - 1;
  return Math.max(getDeepest(node.left, level + 1), getDeepest(node.right, level + 1));
}
// @lc code=end
