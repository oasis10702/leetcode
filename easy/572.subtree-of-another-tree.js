/*
 * @lc app=leetcode id=572 lang=javascript
 *
 * [572] Subtree of Another Tree
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
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  if (s === null) return false;
  if (isSame(s, t)) return true;
  return isSubtree(s.left, t) || isSubtree(s.right, t);
};

function isSame(t1, t2) {
  if (!t1 && !t2) return true;
  if (!t1 || !t2) return false;
  if (t1.val !== t2.val) return false;
  return isSame(t1.left, t2.left) && isSame(t1.right, t2.right);
}
// @lc code=end
