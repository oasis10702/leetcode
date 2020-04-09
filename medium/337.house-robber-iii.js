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
  /* dfs solution
  if (!root) return 0;

  let money = root.val;

  if (root.left) money += rob(root.left.left) + rob(root.left.right);
  if (root.right) money += rob(root.right.left) + rob(root.right.right);

  return Math.max(money, rob(root.left) + rob(root.right));
  */

  const result = robInternal(root);
  // result[0] => no rob
  // result[1] => rob
  return Math.max(result[0], result[1]);
};

function robInternal(root) {
  const result = [0, 0];
  if (!root) return result;

  const left = robInternal(root.left);
  const right = robInternal(root.right);

  result[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
  result[1] = left[0] + right[0] + root.val;

  return result;
}

// @lc code=end
