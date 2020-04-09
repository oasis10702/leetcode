/*
 * @lc app=leetcode id=337 lang=javascript
 *
 * [337] House Robber III
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
var rob = function(root) {
  if (!root) return 0;

  let money = root.val;

  if (root.left) money += rob(root.left.left) + rob(root.left.right);
  if (root.right) money += rob(root.right.left) + rob(root.right.right);

  return Math.max(money, rob(root.left) + rob(root.right));
};
// @lc code=end
