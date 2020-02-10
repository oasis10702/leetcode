import { modes } from 'react-transition-group/SwitchTransition';

/*
 * @lc app=leetcode id=501 lang=javascript
 *
 * [501] Find Mode in Binary Search Tree
 *
 * https://leetcode.com/problems/find-mode-in-binary-search-tree/description/
 *
 * algorithms
 * Easy (40.63%)
 * Likes:    722
 * Dislikes: 281
 * Total Accepted:    72.3K
 * Total Submissions: 176.2K
 * Testcase Example:  '[1,null,2,2]'
 *
 * Given a binary search tree (BST) with duplicates, find all the mode(s) (the
 * most frequently occurred element) in the given BST.
 *
 * Assume a BST is defined as follows:
 *
 *
 * The left subtree of a node contains only nodes with keys less than or equal
 * to the node's key.
 * The right subtree of a node contains only nodes with keys greater than or
 * equal to the node's key.
 * Both the left and right subtrees must also be binary search trees.
 *
 *
 *
 *
 * For example:
 * Given BST [1,null,2,2],
 *
 *
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  2
 *
 *
 *
 *
 * return [2].
 *
 * Note: If a tree has more than one mode, you can return them in any order.
 *
 * Follow up: Could you do that without using any extra space? (Assume that the
 * implicit stack space incurred due to recursion does not count).
 *
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
var findMode = function(root) {
  const mode = [];
  let modeCount = 0;
  let curValue = null;
  let curCount = 0;
  let maxCount = 0;

  inorder(root);

  function inorder(node) {
    if (!node) return;

    inorder(node.left);
    handleValue(node.val);
    inorder(node.right);
  }

  function handleValue(val) {
    if (val !== curValue) {
      curValue = val;
      curCount = 0;
    }
    curCount++;

    if (curCount > maxCount) {
      maxCount = curCount;
      modeCount = 1;
      mode[0] = curValue;
    } else if (curCount === maxCount) {
      mode[modeCount] = curValue;
      modeCount++;
    }
  }

  return mode.slice(0, modeCount);
};
// @lc code=end
