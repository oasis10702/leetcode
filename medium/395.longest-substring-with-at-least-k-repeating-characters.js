/*
 * @lc app=leetcode id=395 lang=javascript
 *
 * [395] Longest Substring with At Least K Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  return count(s, k, 0, s.length - 1);
};

const count = (str, k, left, right) => {
  if (right - left + 1 < k) return 0;

  const map = {};

  for (let i = left; i <= right; i++) {
    map[str[i]] = map[str[i]] ? map[str[i]] + 1 : 1;
  }

  while (right - left > k && map[str[left]] < k) {
    left++;
  }

  while (right - left > k && map[str[right]] < k) {
    right--;
  }

  if (right - left + 1 < k) return 0;

  for (let i = left; i <= right; i++) {
    if (map[str[i]] < k) {
      return Math.max(
        count(str, k, left, i - 1),
        count(str, k, left + 1, right)
      );
    }
  }

  return right - left + 1;
};
// @lc code=end
