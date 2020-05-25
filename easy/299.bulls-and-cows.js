/*
 * @lc app=leetcode id=299 lang=javascript
 *
 * [299] Bulls and Cows
 */

// @lc code=start
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  let a = 0;
  let b = 0;
  let hash = {};

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      a++;
    } else {
      hash[secret[i]] = hash[secret[i]] + 1 || 1;
    }
  }

  for (let i = 0; i < guess.length; i++) {
    if (hash[guess[i]] && secret[i] !== guess[i]) {
      b++;
      hash[guess[i]]--;
    }
  }

  return `${a}A${b}B`;
};
// @lc code=end
