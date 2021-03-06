/*
 * @lc app=leetcode id=131 lang=javascript
 *
 * [131] Palindrome Partitioning
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  const ans = [];

  backtrack(ans, s, 0, []);

  return ans;
};

function backtrack(ans, s, srt, arr) {
  if (srt === s.length) {
    ans.push(arr);
    return;
  }

  for (let i = srt; i < s.length; i++) {
    if (isPalindrome(s, srt, i)) {
      arr.push(s.substring(srt, i + 1));
      backtrack(ans, s, i + 1, [...arr]);
      arr.pop();
    }
  }
}

function isPalindrome(s, srt, end) {
  while (srt < end) {
    if (s[srt] !== s[end]) return false;
    srt++;
    end--;
  }

  return true;
}
// @lc code=end
