/*
 * @lc app=leetcode id=331 lang=javascript
 *
 * [331] Verify Preorder Serialization of a Binary Tree
 */

// @lc code=start
/**
 * @param {string} preorder
 * @return {boolean}
 */

// solution 1
var isValidSerialization = function(preorder) {
  preorder = preorder.split(',');

  let slot = 1;
  for (let p of preorder) {
    slot--;

    if (slot < 0) return false;

    if (p !== '#') {
      slot += 2;
    }
  }
  return slot === 0;
};
// @lc code=end
