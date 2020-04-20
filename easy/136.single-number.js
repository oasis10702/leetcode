/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

/* solution 1 - hash map
var singleNumber = function(nums) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]]++;
    }
  }

  for (let k in map) {
    if (map[k] === 1) return k;
  }
};
*/

var singleNumber = function(nums) {
  let once = 0;
  for (let n of nums) {
    once ^= n;
  }

  return once;
};
// @lc code=end
