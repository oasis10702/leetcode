/*
 * @lc app=leetcode id=606 lang=javascript
 *
 * [606] Construct String from Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
  return construct(t);
};

const construct = n => {
  if (!n) return '';

  let left = construct(n.left);
  let right = construct(n.right);

  left = left.length || right.length ? `(${left})` : '';
  right = right.length ? `(${right})` : '';

  return `${n.val}${left}${right}`;
};
// @lc code=end
