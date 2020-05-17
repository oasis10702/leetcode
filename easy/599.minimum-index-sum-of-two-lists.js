/*
 * @lc app=leetcode id=599 lang=javascript
 *
 * [599] Minimum Index Sum of Two Lists
 */

// @lc code=start
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  let max = list1.length + list2.length;
  let ans = [];
  const map = new Map();

  for (let i = 0; i < list1.length; i++) {
    map.set(list1[i], i);
  }

  for (let i = 0; i < list2.length; i++) {
    if (map.has(list2[i])) {
      if (max === map.get(list2[i]) + i) {
        ans.push(list2[i]);
      } else if (max > map.get(list2[i]) + i) {
        max = map.get(list2[i]) + i;
        ans = [list2[i]];
      }
    }
  }

  return ans;
};
// @lc code=end
