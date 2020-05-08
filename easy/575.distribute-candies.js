/*
 * @lc app=leetcode id=575 lang=javascript
 *
 * [575] Distribute Candies
 */

// @lc code=start
/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
  let target = candies.length / 2;

  const set = [...new Set(candies)];

  return set.length < target ? set.length : target;
};
// @lc code=end
