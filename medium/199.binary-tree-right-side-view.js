/*
 * @lc app=leetcode id=199 lang=javascript
 *
 * [199] Binary Tree Right Side View
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
 * @return {number[]}
 */
var rightSideView = function(root) {
  if (!root) return [];
  const ans = [];
  bfs(root, 0);

  function bfs(node, lv) {
    if (!node) return;
    if (!ans[lv]) {
      ans[lv] = node.val;
    }
    bfs(node.right, lv + 1);
    bfs(node.left, lv + 1);
  }

  return ans;
};
// @lc code=end
