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
  const x0 = coordinates[0][0];
  const y0 = coordinates[0][1];
  const x1 = coordinates[1][0];
  const y1 = coordinates[1][1];
  const dx = x1 - x0;
  const dy = y1 - y0;
  for (let c of coordinates) {
    const x = c[0];
    const y = c[1];
    if (dx * (y - y1) !== dy * (x - x1)) return false;
  }

  return true;
};
// @lc code=end
