/*
 * @lc app=leetcode id=1331 lang=javascript
 *
 * [1331] Rank Transform of an Array
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
  const uniqArr = Array.from(new Set(arr));
  const hash = {};

  uniqArr
    .sort((a, b) => a - b)
    .forEach((a, i) => {
      hash[a] = i + 1;
    });

  return arr.map(a => hash[a]);
};
// @lc code=end
