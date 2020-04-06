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

  backtrack(0, []);

  function backtrack(srt, arr) {
    if (srt === s.length) {
      ans.push(arr);
      return;
    }

    for (let i = srt; i < s.length; i++) {
      const str = s.substring(srt, i + 1);
      if (isPalindrome(str)) {
        arr.push(str);
        backtrack(i + 1, [...arr]);
        arr.pop();
      }
    }
  }

  return ans;
};

function isPalindrome(s) {
  return (
    s ===
    s
      .split('')
      .reverse()
      .join('')
  );
}
// @lc code=end
