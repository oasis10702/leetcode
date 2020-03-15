/*
 * @lc app=leetcode id=204 lang=javascript
 *
 * [204] Count Primes
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  if (n <= 2) return 0;
  let count = 1;
  const isPrime = new Array(n).fill(false);
  for (let i = 3; i < n; i += 2) {
    if (!isPrime[i]) {
      count++;
      for (let j = 3; i * j < n; j += 2) {
        isPrime[i * j] = true;
      }
    }
  }

  return count;
};

// @lc code=end
