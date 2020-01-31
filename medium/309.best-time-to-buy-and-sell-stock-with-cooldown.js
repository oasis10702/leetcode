/*
 * @lc app=leetcode id=309 lang=javascript
 *
 * [309] Best Time to Buy and Sell Stock with Cooldown
 *
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/description/
 *
 * algorithms
 * Medium (45.25%)
 * Likes:    1843
 * Dislikes: 68
 * Total Accepted:    116.9K
 * Total Submissions: 257.4K
 * Testcase Example:  '[1,2,3,0,2]'
 *
 * Say you have an array for which the i^th element is the price of a given
 * stock on day i.
 *
 * Design an algorithm to find the maximum profit. You may complete as many
 * transactions as you like (ie, buy one and sell one share of the stock
 * multiple times) with the following restrictions:
 *
 *
 * You may not engage in multiple transactions at the same time (ie, you must
 * sell the stock before you buy again).
 * After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1
 * day)
 *
 *
 * Example:
 *
 *
 * Input: [1,2,3,0,2]
 * Output: 3
 * Explanation: transactions = [buy, sell, cooldown, buy, sell]
 *
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  /*
  dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
  dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i]);
  */
  let dp_0 = 0;
  let dp_1 = -Number.MAX_VALUE;
  // standard for dp[i - 2][0] initial value
  let dp_pre = 0;
  for (let i = 0; i < prices.length; i++) {
    let tmp = dp_0;
    dp_0 = Math.max(dp_0, dp_1 + prices[i]);
    dp_1 = Math.max(dp_1, dp_pre - prices[i]);
    dp_pre = tmp;
  }

  return dp_0;
};
// @lc code=end
