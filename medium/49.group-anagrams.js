/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 *
 * https://leetcode.com/problems/group-anagrams/description/
 *
 * algorithms
 * Medium (51.24%)
 * Likes:    2667
 * Dislikes: 154
 * Total Accepted:    508.1K
 * Total Submissions: 956.4K
 * Testcase Example:  '["eat","tea","tan","ate","nat","bat"]'
 *
 * Given an array of strings, group anagrams together.
 *
 * Example:
 *
 *
 * Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
 * Output:
 * [
 * ⁠ ["ate","eat","tea"],
 * ⁠ ["nat","tan"],
 * ⁠ ["bat"]
 * ]
 *
 * Note:
 *
 *
 * All inputs will be in lowercase.
 * The order of your output does not matter.
 *
 *
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  //   const tb = {};
  //   const ans = [];
  //   let index = 0;

  //   for (let str of strs) {
  //     const sortStr = str
  //       .split('')
  //       .sort()
  //       .join('');

  //     if (!tb[sortStr] && tb[sortStr] !== 0) {
  //       tb[sortStr] = index;
  //       ans[index] = [str];
  //       index++;
  //     } else {
  //       ans[tb[sortStr]].push(str);
  //     }
  //   }

  //   return ans;

  const map = {};

  for (let str of strs) {
    const key = [...str].sort().join('');

    if (!map[key]) {
      map[key] = [];
    }

    map[key].push(str);
  }

  return Object.values(map);
};

// @lc code=end
