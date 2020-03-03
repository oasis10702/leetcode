/*
 * @lc app=leetcode id=917 lang=javascript
 *
 * [917] Reverse Only Letters
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
  let lo = 0;
  let hi = S.length - 1;
  const reverse = S.split('');
  while (lo < hi) {
    if (!isAlpha(S[hi])) {
      hi--;
    } else if (!isAlpha(S[lo])) {
      lo++;
    } else {
      [reverse[lo], reverse[hi]] = [reverse[hi], reverse[lo]];
      lo++;
      hi--;
    }
  }

  return reverse.join('');
};

const isAlpha = function(ch) {
  return /^[A-Z]$/i.test(ch);
};
// @lc code=end
