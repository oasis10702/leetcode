/*
 * @lc app=leetcode id=872 lang=javascript
 *
 * [872] Leaf-Similar Trees
 *
 * https://leetcode.com/problems/leaf-similar-trees/description/
 *
 * algorithms
 * Easy (64.39%)
 * Likes:    555
 * Dislikes: 27
 * Total Accepted:    68.8K
 * Total Submissions: 106.3K
 * Testcase Example:  '[3,5,1,6,2,9,8,null,null,7,4]\n[3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]'
 *
 * Consider all the leaves of a binary tree.  From left to right order, the
 * values of those leaves form a leaf value sequence.
 *
 *
 *
 * For example, in the given tree above, the leaf value sequence is (6, 7, 4,
 * 9, 8).
 *
 * Two binary trees are considered leaf-similar if their leaf value sequence is
 * the same.
 *
 * Return true if and only if the two given trees with head nodes root1 and
 * root2 are leaf-similar.
 *
 *
 *
 * Note:
 *
 *
 * Both of the given trees will have between 1 and 100 nodes.
 *
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  const sq = [];
  getSequence(root1, sq);
  const sq2 = [];
  getSequence(root2, sq2);
  function getSequence(node, arr) {
    if (!node) return;
    if (!node.left && !node.right) {
      arr.push(node.val);
    }
    getSequence(node.left, arr);
    getSequence(node.right, arr);
  }

  return String(sq) === String(sq2);
};
// @lc code=end
