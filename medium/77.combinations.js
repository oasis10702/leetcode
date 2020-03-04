/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const ans = [];
  backtrack([], 1);

  function backtrack(arr, pos) {
    if (arr.length === k) {
      ans.push(arr);
      return;
    }

    for (let i = pos; i < n + 1; i++) {
      arr.push(i);
      backtrack([...arr], i + 1);
      arr.pop();
    }
  }

  return ans;
};
// @lc code=end
