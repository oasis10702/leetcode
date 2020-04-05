/*
 * @lc app=leetcode id=205 lang=javascript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  if (s.length !== t.length) return false;
  const map1 = {};
  const map2 = {};

  for (let i = 0; i < s.length; i++) {
    const v1 = s[i];
    const v2 = t[i];

    if (map1[v1] && map1[v1] !== v2) return false;
    if (map2[v2] && map2[v2] !== v1) return false;

    map1[v1] = v2;
    map2[v2] = v1;
  }

  return true;
};
// @lc code=end
