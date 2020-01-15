/*
 * @lc app=leetcode id=1227 lang=javascript
 *
 * [1227] Airplane Seat Assignment Probability
 *
 * https://leetcode.com/problems/airplane-seat-assignment-probability/description/
 *
 * algorithms
 * Medium (60.15%)
 * Likes:    88
 * Dislikes: 128
 * Total Accepted:    4.6K
 * Total Submissions: 7.8K
 * Testcase Example:  '1'
 *
 * n passengers board an airplane with exactly n seats. The first passenger has
 * lost the ticket and picks a seat randomly. But after that, the rest of
 * passengers will:
 *
 *
 * Take their own seat if it is still available,
 * Pick other seats randomly when they find their seat occupied
 *
 *
 * What is the probability that the n-th person can get his own seat?
 *
 *
 * Example 1:
 *
 *
 * Input: n = 1
 * Output: 1.00000
 * Explanation: The first person can only get the first seat.
 *
 * Example 2:
 *
 *
 * Input: n = 2
 * Output: 0.50000
 * Explanation: The second person has a probability of 0.5 to get the second
 * seat (when first person gets the first seat).
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= n <= 10^5
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthPersonGetsNthSeat = function(n) {
  /* NOTE: 假設總共有n個座位，p[i]表示第一個上飛機的人選擇第i個座位時，
 第n個上飛機的人，自己的座位，第n個座位被佔用的機率，所以p[n] = 1,
 因為第一個人選擇了第n個座位，就無法再被使用了。
 所以接下來可以推論: p[n-1] = 0.5，因為第一個如果選擇了第n-1個座位，
 那其他人都會對號入座，直到那第n-1個上飛機的人，只剩下1和n個座位可以選擇。
 於是推論: p[n-2] = 0.5，同上面的情況下第n-2個人有三種選擇，也就是1, n-1
 以及n，選擇n時，機率為1/3，選擇n-1時，機率則同上也就是1/3 * p[n-1]，所以
 計算方式為p[n-2] = 1/3 + 1/3 * p[n-1] = 0.5

 因此可以推論第n個座位被其他人佔用的機率為: 1/n * (p[1] + p[2] + ... + p[n]) = 1/2
 */

  if (n === 1) return 1;

  return 0.5;
};
// @lc code=end
