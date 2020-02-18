/*
 * @lc app=leetcode id=1154 lang=javascript
 *
 * [1154] Day of the Year
 *
 * https://leetcode.com/problems/day-of-the-year/description/
 *
 * algorithms
 * Easy (48.93%)
 * Likes:    61
 * Dislikes: 115
 * Total Accepted:    12.9K
 * Total Submissions: 26.4K
 * Testcase Example:  '"2019-01-09"\r'
 *
 * Given a string date representing a Gregorian calendar date formatted as
 * YYYY-MM-DD, return the day number of the year.
 *
 *
 * Example 1:
 *
 *
 * Input: date = "2019-01-09"
 * Output: 9
 * Explanation: Given date is the 9th day of the year in 2019.
 *
 *
 * Example 2:
 *
 *
 * Input: date = "2019-02-10"
 * Output: 41
 *
 *
 * Example 3:
 *
 *
 * Input: date = "2003-03-01"
 * Output: 60
 *
 *
 * Example 4:
 *
 *
 * Input: date = "2004-03-01"
 * Output: 61
 *
 *
 *
 * Constraints:
 *
 *
 * date.length == 10
 * date[4] == date[7] == '-', and all other date[i]'s are digits
 * date represents a calendar date between Jan 1st, 1900 and Dec 31, 2019.
 *
 */

// @lc code=start
/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
  const s = date.slice(0, 5) + '01-01';
  const secondInDay = 24 * 60 * 60;
  return (
    (new Date(date).getTime() - new Date(s).getTime()) / 1000 / secondInDay + 1
  );
};
// @lc code=end