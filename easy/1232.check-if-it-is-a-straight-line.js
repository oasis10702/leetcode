/*
 * @lc app=leetcode id=1232 lang=javascript
 *
 * [1232] Check If It Is a Straight Line
 */

// @lc code=start
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
  coordinates.sort((a, b) => a[0] - b[0]);
  const slope = (coordinates[1][0] - coordinates[0][0]) / (coordinates[1][1] - coordinates[0][1]);
  for (let i = 1; i < coordinates.length - 1; i++) {
    const slp = (coordinates[i + 1][0] - coordinates[i][0]) / (coordinates[i + 1][1] - coordinates[i][1]);
    if (slp !== slope) return false;
  }

  return true;
};
// @lc code=end
