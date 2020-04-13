/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * @param {number} n
 * @return {ListNode}
 */
/* solution 1 - two pass (the first pass is to get list length)
var removeNthFromEnd = function(head, n) {
  // dummy is to avoid head deleted
  const dummy = new ListNode(0);

  dummy.next = head;
  let length = 0;
  let first = head;

  // find List length
  while (first) {
    length++;
    first = first.next;
  }

  length -= n;
  first = dummy;

  while (length > 0) {
    first = first.next;
    length--;
  }

  first.next = first.next.next;
  return dummy.next;
};
*/

// solution 2 - one pass by two pointers
var removeNthFromEnd = function(head, n) {
  // dummy is to avoid head deleted
  const dummy = new ListNode(0);
  dummy.next = head;
  let first = dummy;
  let second = dummy;

  // move first pointer so that first and second is n nodes apart
  for (let i = 1; i <= n + 1; i++) {
    first = first.next;
  }

  while (first) {
    first = first.next;
    second = second.next;
  }

  second.next = second.next.next;
  return dummy.next;
};
// @lc code=end
