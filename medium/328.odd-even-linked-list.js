/*
 * @lc app=leetcode id=328 lang=javascript
 *
 * [328] Odd Even Linked List
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
 * @return {ListNode}
 */

// TODO: optimization
var oddEvenList = function(head) {
  if (!head) return null;
  if (!head.next) return head;

  let oddTail = head;
  let evenHead = head.next;
  let evenTail = head.next;

  while (oddTail.next && oddTail.next.next) {
    oddTail.next = oddTail.next.next;
    oddTail = oddTail.next;
    if (evenTail.next && evenTail.next.next) {
      evenTail.next = evenTail.next.next;
      evenTail = evenTail.next;
    } else {
      evenTail.next = null;
    }
  }

  oddTail.next = evenHead;

  return head;
};
// @lc code=end
