/*
 * @lc app=leetcode id=491 lang=javascript
 *
 * [491] Increasing Subsequences
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  const ans = [];
  const map = {};

  const dfs = (arr, idx) => {
    for (let i = idx; i < nums.length; i++) {
      if (arr.length === 0 || nums[i] >= arr[arr.length - 1]) {
        arr.push(nums[i]);

        if (arr.length >= 2) {
          if (!map[arr]) {
            ans.push([...arr]);
            map[arr] = true;
          }
        }

        dfs([...arr], i + 1);
        arr.pop();
      }
    }
  };

  dfs([], 0);

  return ans;
};

// @lc code=end
