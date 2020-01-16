/*
 * @lc app=leetcode id=1047 lang=javascript
 *
 * [1047] Remove All Adjacent Duplicates In String
 *
 * https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/description/
 *
 * algorithms
 * Easy (65.63%)
 * Likes:    417
 * Dislikes: 36
 * Total Accepted:    45.3K
 * Total Submissions: 68.8K
 * Testcase Example:  '"abbaca"'
 *
 * Given a string S of lowercase letters, a duplicate removal consists of
 * choosing two adjacent and equal letters, and removing them.
 *
 * We repeatedly make duplicate removals on S until we no longer can.
 *
 * Return the final string after all such duplicate removals have been made.
 * It is guaranteed the answer is unique.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: "abbaca"
 * Output: "ca"
 * Explanation:
 * For example, in "abbaca" we could remove "bb" since the letters are adjacent
 * and equal, and this is the only possible move.  The result of this move is
 * that the string is "aaca", of which only "aa" is possible, so the final
 * string is "ca".
 *
 *
 *
 *
 * Note:
 *
 *
 * 1 <= S.length <= 20000
 * S consists only of English lowercase letters.
 *
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
  S = S.split('');
  for (let i = 0; i < S.length; i++) {
    if (S[i] === S[i + 1]) {
      S.splice(i, 2);
      i = i - 2 < 0 ? -1 : i - 2;
    }
  }
  return S.join('');
};
// @lc code=end
