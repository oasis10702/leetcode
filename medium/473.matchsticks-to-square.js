/*
 * @lc app=leetcode id=473 lang=javascript
 *
 * [473] Matchsticks to Square
 *
 * https://leetcode.com/problems/matchsticks-to-square/description/
 *
 * algorithms
 * Medium (36.69%)
 * Likes:    467
 * Dislikes: 48
 * Total Accepted:    31.8K
 * Total Submissions: 86K
 * Testcase Example:  '[1,1,2,2,2]'
 *
 * Remember the story of Little Match Girl? By now, you know exactly what
 * matchsticks the little match girl has, please find out a way you can make
 * one square by using up all those matchsticks. You should not break any
 * stick, but you can link them up, and each matchstick must be used exactly
 * one time.
 *
 * ⁠Your input will be several matchsticks the girl has, represented with their
 * stick length. Your output will either be true or false, to represent whether
 * you could make one square using all the matchsticks the little match girl
 * has.
 *
 * Example 1:
 *
 * Input: [1,1,2,2,2]
 * Output: true
 *
 * Explanation: You can form a square with length 2, one side of the square
 * came two sticks with length 1.
 *
 *
 *
 * Example 2:
 *
 * Input: [3,3,3,3,4]
 * Output: false
 *
 * Explanation: You cannot find a way to form a square with all the
 * matchsticks.
 *
 *
 *
 * Note:
 *
 * The length sum of the given matchsticks is in the range of 0 to 10^9.
 * The length of the given matchstick array will not exceed 15.
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var makesquare = function(nums) {
  const sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 4 !== 0 || nums.length < 4) return false;

  const target = sum / 4;
  const arr = new Array(4).fill(0);

  return dfs(nums, arr, 0, target);
};

const dfs = function(nums, arr, index, target) {
  if (nums.length === index) {
    return arr[0] === target && arr[1] === target && arr[2] === target;
  }

  for (let i = 0; i < 4; i++) {
    if (arr[i] + nums[index] > target) continue;
    arr[i] += nums[index];
    if (dfs(nums, arr, index + 1, target)) return true;
    arr[i] -= nums[index];
  }

  return false;
};
// @lc code=end
