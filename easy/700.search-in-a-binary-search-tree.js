/*
 * @lc app=leetcode id=700 lang=javascript
 *
 * [700] Search in a Binary Search Tree
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
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  const node = binarySearch(root, val);

  return node;
};

const binarySearch = (node, target) => {
  if (!node) return null;

  if (target === node.val) {
    return node;
  } else if (target > node.val) {
    return binarySearch(node.right, target);
  } else if (target < node.val) {
    return binarySearch(node.left, target);
  }
};
// @lc code=end
