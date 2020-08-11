/*
 * @lc app=leetcode id=1346 lang=javascript
 *
 * [1346] Check If N and Its Double Exist
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  const hash = {};

  for (let a of arr) {
    if (hash[a]) {
      return true;
    }

    hash[a * 2] = true;
    hash[a / 2] = true;
  }

  return false;
};
// @lc code=end
