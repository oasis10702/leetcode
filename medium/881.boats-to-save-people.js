/*
 * @lc app=leetcode id=881 lang=javascript
 *
 * [881] Boats to Save People
 *
 * https://leetcode.com/problems/boats-to-save-people/description/
 *
 * algorithms
 * Medium (45.26%)
 * Likes:    389
 * Dislikes: 29
 * Total Accepted:    23.5K
 * Total Submissions: 51.9K
 * Testcase Example:  '[1,2]\n3'
 *
 * The i-th person has weight people[i], and each boat can carry a maximum
 * weight of limit.
 *
 * Each boat carries at most 2 people at the same time, provided the sum of the
 * weight of those people is at most limit.
 *
 * Return the minimum number of boats to carry every given person.  (It is
 * guaranteed each person can be carried by a boat.)
 *
 *
 *
 *
 * Example 1:
 *
 *
 * Input: people = [1,2], limit = 3
 * Output: 1
 * Explanation: 1 boat (1, 2)
 *
 *
 *
 * Example 2:
 *
 *
 * Input: people = [3,2,2,1], limit = 3
 * Output: 3
 * Explanation: 3 boats (1, 2), (2) and (3)
 *
 *
 *
 * Example 3:
 *
 *
 * Input: people = [3,5,3,4], limit = 5
 * Output: 4
 * Explanation: 4 boats (3), (3), (4), (5)
 *
 * Note:
 *
 *
 * 1 <= people.length <= 50000
 * 1 <= people[i] <= limit <= 30000
 *
 *
 *
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
  people.sort((a, b) => b - a);

  let p1 = 0;
  let p2 = people.length - 1;

  while (p1 <= p2) {
    if (people[p1] + people[p2] <= limit) p2--;
    p1++;
  }

  return p1;
};
// @lc code=end
