/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 *
 * https://leetcode.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (58.13%)
 * Likes:    3165
 * Dislikes: 76
 * Total Accepted:    759.2K
 * Total Submissions: 1.3M
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * Reverse a singly linked list.
 *
 * Example:
 *
 *
 * Input: 1->2->3->4->5->NULL
 * Output: 5->4->3->2->1->NULL
 *
 *
 * Follow up:
 *
 * A linked list can be reversed either iteratively or recursively. Could you
 * implement both?
 *
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
var reverseList = function(head) {
  if (!head || !head.next) return head;
  // let prev = null;
  // let cur = head;
  // let next = head;

  // while (cur) {
  //   next = cur.next;
  //   cur.next = prev;
  //   prev = cur;
  //   cur = next;
  // }
  const newList = reverseList(head.next);
  const tmp = head.next;
  tmp.next = head;
  head.next = null;
  return newList;

  // return prev;
};
// @lc code=end
