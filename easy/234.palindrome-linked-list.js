/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (head == null || head.next == null) return true;

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let reverseNode = reverse(slow);

  while (head && reverseNode) {
    if (head.val !== reverseNode.val) return false;
    head = head.next;
    reverseNode = reverseNode.next;
  }

  return true;
};

const reverse = head => {
  let prev = null;
  let next = null;

  while (head) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
};
// @lc code=end
