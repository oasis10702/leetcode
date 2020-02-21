/*
 * @lc app=leetcode id=763 lang=javascript
 *
 * [763] Partition Labels
 *
 * https://leetcode.com/problems/partition-labels/description/
 *
 * algorithms
 * Medium (73.07%)
 * Likes:    1605
 * Dislikes: 78
 * Total Accepted:    88.5K
 * Total Submissions: 120.4K
 * Testcase Example:  '"ababcbacadefegdehijhklij"'
 *
 *
 * A string S of lowercase letters is given.  We want to partition this string
 * into as many parts as possible so that each letter appears in at most one
 * part, and return a list of integers representing the size of these parts.
 *
 *
 * Example 1:
 *
 * Input: S = "ababcbacadefegdehijhklij"
 * Output: [9,7,8]
 * Explanation:
 * The partition is "ababcbaca", "defegde", "hijhklij".
 * This is a partition so that each letter appears in at most one part.
 * A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it
 * splits S into less parts.
 *
 *
 *
 * Note:
 * S will have length in range [1, 500].
 * S will consist of lowercase letters ('a' to 'z') only.
 *
 */

// @lc code=start
/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
  const ans = [];
  let p = 0;
  let count = 0;

  for (let i = 0; i < S.length; i++) {
    const idx = S.lastIndexOf(S[i]);
    p = Math.max(p, idx);
    count++;
    if (p === i) {
      ans.push(count);
      count = 0;
    }
  }

  return ans;
};
// @lc code=end
